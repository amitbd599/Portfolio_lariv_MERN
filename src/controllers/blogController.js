const mongoose = require("mongoose");
const blogModel = require("../models/blogModel");
const ObjectId = mongoose.Types.ObjectId;

// create blog
exports.createBlog = async (req, res) => {
  try {
    const { title, category, sortDescription, longDescription, featureImg } =
      req.body;
    const result = await blogModel.create({
      title,
      category,
      sortDescription,
      longDescription,
      featureImg,
    });

    return res.status(201).json({
      success: true,
      data: result,
      message: "Blog add successful.",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      // Mongoose validation errors
      const messages = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({ success: false, message: messages[0] });
    }

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.toString(),
    });
  }
};

// get all blog with pagination
exports.getAllBlog = async (req, res) => {
  try {
    const limit = parseInt(req.params.limit); // Number of items per page
    const pageNo = parseInt(req.params.pageNo); // Current page number

    if (isNaN(limit) || isNaN(pageNo)) {
      return res.status(200).json({ message: "Invalid parameters" });
    }

    const skipStage = { $skip: (pageNo - 1) * limit };
    const limitStage = { $limit: limit };
    const sort = { $sort: { createdAt: -1 } };
    const projectStage = {
      $project: {
        title: 1,
        category: 1,
        sortDescription: 1,
        featureImg: 1,
        date: {
          $dateToString: { format: "%d-%m-%Y", date: "$createdAt" },
        },
      },
    };

    const facet = {
      $facet: {
        total: [{ $count: "count" }],
        blog: [projectStage, skipStage, limitStage],
      },
    };

    let result = await blogModel.aggregate([sort, facet]);

    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.toString(),
    });
  }
};

// get single blog
exports.getSingleBlog = async (req, res) => {
  try {
    let id = new ObjectId(req.params.id);

    let match = {
      $match: { _id: id },
    };
    let project = {
      $project: {
        _id: 0,
        title: 1,
        category: 1,
        sortDescription: 1,
        longDescription: 1,
        featureImg: 1,
        date: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
      },
    };
    const result = await blogModel.aggregate([match, project]);

    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.toString(),
    });
  }
};

//  delete blog
exports.deleteSingleBlog = async (req, res) => {
  try {
    let id = new ObjectId(req.params.id);
    const result = await blogModel.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "Blog not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: result,
      message: "Blog delete successful.",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.toString(),
    });
  }
};

// get update blog
exports.updateSingleBlog = async (req, res) => {
  try {
    let id = new ObjectId(req.params.id);
    const { title, category, sortDescription, longDescription, featureImg } =
      req.body;
    const result = await blogModel.findByIdAndUpdate(
      { _id: id },
      { title, category, sortDescription, longDescription, featureImg },
      { new: true, runValidators: true } // Ensures validation is triggered
    );

    if (result.modifiedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "Blog not update.",
      });
    }

    return res.status(200).json({
      success: true,
      data: result,
      message: "Blog update successful.",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      // Mongoose validation errors
      const messages = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({ success: false, message: messages[0] });
    }
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.toString(),
    });
  }
};
