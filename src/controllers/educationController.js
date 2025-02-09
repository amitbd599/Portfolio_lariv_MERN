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
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.toString(),
    });
  }
};

// get all experience
exports.getAllExperience = async (req, res) => {
  try {
    let project = {
      $project: {
        _id: 0,
        title: 1,
        subTitle: 1,
        description: 1,
        time: 1,
        date: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
      },
    };
    const result = await experienceModel.aggregate([project]);

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

// get single experience
exports.getSingleExperience = async (req, res) => {
  try {
    let id = new ObjectId(req.params.id);

    let match = {
      $match: { _id: id },
    };
    let project = {
      $project: {
        _id: 0,
        title: 1,
        subTitle: 1,
        description: 1,
        time: 1,
        date: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
      },
    };
    const result = await experienceModel.aggregate([match, project]);

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

// get delete experience
exports.deleteSingleExperience = async (req, res) => {
  try {
    let id = new ObjectId(req.params.id);
    const result = await experienceModel.deleteOne({ _id: id });

    console.log(result);

    if (result.deletedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "Experience not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: result,
      message: "Experience delete successful.",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.toString(),
    });
  }
};

// get update experience
exports.updateSingleExperience = async (req, res) => {
  try {
    let id = new ObjectId(req.params.id);
    const { title, subTitle, description, time } = req.body;
    const result = await experienceModel.updateOne(
      { _id: id },
      { title, subTitle, description, time }
    );

    if (result.modifiedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "Experience not update.",
      });
    }

    return res.status(200).json({
      success: true,
      data: result,
      message: "Experience update successful.",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.toString(),
    });
  }
};
