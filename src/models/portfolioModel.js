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
    link: {
      type: String,
      required: [true, "Link cannot be empty!"],
      minlength: [3, "Link must be at least 3 characters long"],
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

const portfolioModel = mongoose.model("portfolios", DataSchema);

module.exports = portfolioModel;
