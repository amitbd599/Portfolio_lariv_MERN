const mongoose = require("mongoose");
const DataSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title cannot be empty!"],
      minlength: [3, "Title must be at least 3 characters long"],
    },
    description: {
      type: String,
      required: [true, "Description cannot be empty!"],
      minlength: [3, "Description must be at least 3 characters long"],
    },
    img: {
      type: String,
      required: [true, "Image cannot be empty!"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const serviceModel = mongoose.model("services", DataSchema);

module.exports = serviceModel;
