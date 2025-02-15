const mongoose = require("mongoose");
const serviceModel = require("../models/serviceModel");
const fileModel = require("../models/fileModel");
const ObjectId = mongoose.Types.ObjectId;
const fs = require("fs");
const path = require("path");
// create file
exports.createFile = async (req, res) => {
  console.log(!!req.file);

  try {
    if (!!req.file === true) {
      const result = await fileModel.create({
        fileName: req?.file?.filename,
      });

      return res.status(201).json({
        success: true,
        data: result,
        message: "File add successful.",
      });
    } else {
      return res
        .status(400)
        .json({ success: false, message: "No files uploaded." });
    }
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

// get all file
exports.getAllFile = async (req, res) => {
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
        _id: 1,
        fileName: 1,
        date: {
          $dateToString: { format: "%d-%m-%Y", date: "$createdAt" },
        },
      },
    };

    const facet = {
      $facet: {
        total: [{ $count: "count" }],
        file: [projectStage, skipStage, limitStage],
      },
    };

    let result = await fileModel.aggregate([sort, facet]);

    return res.status(200).json({
      success: true,
      data: result[0],
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.toString(),
    });
  }
};

//  delete file
exports.deleteSingleFile = async (req, res) => {
  try {
    let id = new ObjectId(req.params.id);
    let { fileName } = req.body;

    if (!fileName) {
      return res
        .status(400)
        .json({ success: false, message: "Filename is required" });
    }

    const filePath = path.join(__dirname, "../../uploads", fileName);

    fs.unlink(filePath, async (err) => {
      if (err) {
        return res.status(500).json({
          message: "File not found or could not be deleted",
          err: err.toString(),
        });
      }

      const result = await fileModel.deleteOne({ _id: id });
      if (result.deletedCount === 0) {
        return res.status(404).json({
          success: false,
          message: "File not found.",
        });
      }

      return res.status(200).json({
        success: true,
        data: result,
        message: "File delete successful.",
      });
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.toString(),
    });
  }
};
