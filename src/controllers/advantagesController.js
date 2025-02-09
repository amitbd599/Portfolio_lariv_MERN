const mongoose = require("mongoose");
const advantagesModel = require("../models/advantagesModel");
const ObjectId = mongoose.Types.ObjectId;

// create advantages
exports.createAdvantages = async (req, res) => {
  try {
    const { subject, position, percent, time } = req.body;
    const result = await advantagesModel.create({
      subject,
      position,
      percent,
      time,
    });

    return res.status(201).json({
      success: true,
      data: result,
      message: "Advantages add successful.",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.toString(),
    });
  }
};

// get all advantages
exports.getAllAdvantages = async (req, res) => {
  try {
    let project = {
      $project: {
        _id: 0,
        subject: 1,
        position: 1,
        percent: 1,
        time: 1,
        date: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
      },
    };
    const result = await advantagesModel.aggregate([project]);

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

// get single advantages
exports.getSingleAdvantages = async (req, res) => {
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
    const result = await advantagesModel.aggregate([match, project]);

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

// get delete advantages
exports.deleteSingleAdvantages = async (req, res) => {
  try {
    let id = new ObjectId(req.params.id);
    const result = await advantagesModel.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "Advantages not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: result,
      message: "Advantages delete successful.",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.toString(),
    });
  }
};

// get update advantages
exports.updateSingleAdvantages = async (req, res) => {
  try {
    let id = new ObjectId(req.params.id);
    const { title, subTitle, description, time } = req.body;
    const result = await advantagesModel.updateOne(
      { _id: id },
      { title, subTitle, description, time }
    );

    if (result.modifiedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "Advantages not update.",
      });
    }

    return res.status(200).json({
      success: true,
      data: result,
      message: "Advantages update successful.",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.toString(),
    });
  }
};
