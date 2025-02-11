const mongoose = require("mongoose");
const DataSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title cannot be empty!"],
      minlength: [3, "Title must be at least 3 characters long"],
    },
    institution: {
      type: String,
      required: [true, "Institution cannot be empty!"],
      minlength: [3, "Institution must be at least 3 characters long"],
    },
    description: {
      type: String,
      required: [true, "Description cannot be empty!"],
      minlength: [3, "Description must be at least 3 characters long"],
    },
    time: {
      type: String,
      required: [true, "Time cannot be empty!"],
      minlength: [3, "Time must be at least 3 characters long"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const educationModel = mongoose.model("educations", DataSchema);

module.exports = educationModel;
