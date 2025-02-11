const mongoose = require("mongoose");
const DataSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title cannot be empty!"],
      minlength: [3, "Title must be at least 3 characters long"],
    },
    category: {
      type: String,
      required: [true, "Category cannot be empty!"],
      minlength: [3, "Category must be at least 3 characters long"],
    },
    sortDescription: {
      type: String,
      required: [true, "Sort Description cannot be empty!"],
      minlength: [3, "Sort Description must be at least 3 characters long"],
    },
    longDescription: {
      type: String,
      required: [true, "Long Description cannot be empty!"],
      minlength: [3, "Long Description must be at least 3 characters long"],
    },
    featureImg: {
      type: String,
      required: [true, "Image cannot be empty!"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const blogModel = mongoose.model("blogs", DataSchema);

module.exports = blogModel;
