const mongoose = require("mongoose");
const experienceModel = require("../models/experienceModel");
const educationModel = require("../models/educationModel");
const ObjectId = mongoose.Types.ObjectId;

// create education
exports.createEducation = async (req, res) => {
  try {
    const { title, institution, description, time } = req.body;
    const result = await educationModel.create({
      title,
      institution,
      description,
      time,
    });

    return res.status(201).json({
      success: true,
      data: result,
      message: "Education add successful.",
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

// get all education
exports.getAllEducation = async (req, res) => {
  try {
    let project = {
      $project: {
        _id: 0,
        title: 1,
        institution: 1,
        description: 1,
        time: 1,
        date: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
      },
    };
    const result = await educationModel.aggregate([project]);

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

// get single education
exports.getSingleEducation = async (req, res) => {
  try {
    let id = new ObjectId(req.params.id);

    let match = {
      $match: { _id: id },
    };
    let project = {
      $project: {
        _id: 0,
        title: 1,
        institution: 1,
        description: 1,
        time: 1,
        date: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
      },
    };
    const result = await educationModel.aggregate([match, project]);

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

// get delete education
exports.deleteSingleEducation = async (req, res) => {
  try {
    let id = new ObjectId(req.params.id);
    const result = await educationModel.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "Education not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: result,
      message: "Education delete successful.",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.toString(),
    });
  }
};

// get update education
exports.updateSingleEducation = async (req, res) => {
  try {
    let id = new ObjectId(req.params.id);
    const { title, institution, description, time } = req.body;
    const result = await educationModel.findByIdAndUpdate(
      { _id: id },
      { title, institution, description, time },
      { new: true, runValidators: true } // Ensures validation is triggered
    );

    if (result.modifiedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "Education not update.",
      });
    }

    return res.status(200).json({
      success: true,
      data: result,
      message: "Education update successful.",
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
