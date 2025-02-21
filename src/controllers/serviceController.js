const mongoose = require("mongoose");
const serviceModel = require("../models/serviceModel");
const ObjectId = mongoose.Types.ObjectId;

// create service
exports.createService = async (req, res) => {
  try {
    const { title, description, img } = req.body;
    const result = await serviceModel.create({
      title,
      description,
      img,
    });

    return res.status(201).json({
      success: true,
      data: result,
      message: "Service add successful.",
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

// get all service
exports.getAllService = async (req, res) => {
  try {
    let project = {
      $project: {
        _id: 1,
        title: 1,
        description: 1,
        img: 1,
        date: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
      },
    };
    const result = await serviceModel.aggregate([project]);

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

// get single service
exports.getSingleService = async (req, res) => {
  try {
    let id = new ObjectId(req.params.id);

    let match = {
      $match: { _id: id },
    };
    let project = {
      $project: {
        _id: 0,
        title: 1,
        description: 1,
        img: 1,
        date: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
      },
    };
    const result = await serviceModel.aggregate([match, project]);

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

//  delete service
exports.deleteSingleService = async (req, res) => {
  try {
    let id = new ObjectId(req.params.id);
    const result = await serviceModel.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "Service not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: result,
      message: "Service delete successful.",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.toString(),
    });
  }
};

// get update service
exports.updateSingleService = async (req, res) => {
  try {
    let id = new ObjectId(req.params.id);
    const { title, description, img } = req.body;
    const result = await serviceModel.findByIdAndUpdate(
      { _id: id },
      { title, description, img },
      { new: true, runValidators: true } // Ensures validation is triggered
    );

    if (result.modifiedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "Service not update.",
      });
    }

    return res.status(200).json({
      success: true,
      data: result,
      message: "Service update successful.",
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
