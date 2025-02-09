const mongoose = require("mongoose");
const DataSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    institution: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const educationModel = mongoose.model("educations", DataSchema);

module.exports = educationModel;
