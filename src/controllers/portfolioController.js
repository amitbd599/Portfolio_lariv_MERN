const mongoose = require("mongoose");
const portfolioModel = require("../models/portfolioModel");
const ObjectId = mongoose.Types.ObjectId;

// create portfolio
exports.createPortfolio = async (req, res) => {
  try {
    const { title, category, link, img } = req.body;
    const result = await portfolioModel.create({
      title,
      category,
      link,
      img,
    });

    return res.status(201).json({
      success: true,
      data: result,
      message: "Portfolio add successful.",
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

// get all portfolio
exports.getAllPortfolio = async (req, res) => {
  try {
    let project = {
      $project: {
        _id: 0,
        title: 1,
        category: 1,
        link: 1,
        img: 1,
        date: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
      },
    };
    const result = await portfolioModel.aggregate([project]);

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

// get single portfolio
exports.getSinglePortfolio = async (req, res) => {
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
        link: 1,
        img: 1,
        date: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
      },
    };
    const result = await portfolioModel.aggregate([match, project]);

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

//  delete portfolio
exports.deleteSinglePortfolio = async (req, res) => {
  try {
    let id = new ObjectId(req.params.id);
    const result = await portfolioModel.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "Portfolio not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: result,
      message: "Portfolio delete successful.",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.toString(),
    });
  }
};

// get update portfolio
exports.updateSinglePortfolio = async (req, res) => {
  try {
    let id = new ObjectId(req.params.id);
    const { title, category, link, img } = req.body;
    const result = await portfolioModel.findByIdAndUpdate(
      { _id: id },
      { title, category, link, img },
      { new: true, runValidators: true } // Ensures validation is triggered
    );

    if (result.modifiedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "Portfolio not update.",
      });
    }

    return res.status(200).json({
      success: true,
      data: result,
      message: "Portfolio update successful.",
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
