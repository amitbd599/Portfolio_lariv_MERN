const mongoose = require("mongoose");
const DataSchema = new mongoose.Schema(
  {
    fileName: {
      type: String,
      required: [true, "Image Path cannot be empty!"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const fileModel = mongoose.model("files", DataSchema);

module.exports = fileModel;
