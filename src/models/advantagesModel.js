const mongoose = require("mongoose");
const DataSchema = new mongoose.Schema(
  {
    subject: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    percent: {
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

const advantagesModel = mongoose.model("advantages", DataSchema);

module.exports = advantagesModel;
