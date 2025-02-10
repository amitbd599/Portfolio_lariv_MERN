const mongoose = require("mongoose");
const DataSchema = new mongoose.Schema(
  {
    subject: {
      type: String,
      required: [true, "Subject cannot be empty!"],
      minlength: [3, "Subject must be at least 3 characters long"],
    },
    position: {
      type: String,
      required: [true, "Position cannot be empty!"],
      minlength: [3, "Position must be at least 3 characters long"],
    },
    percent: {
      type: String,
      required: [true, "Percent cannot be empty!"],
      minlength: [3, "Percent must be at least 3 characters long"],
    },
    time: {
      type: String,
      required: true,
      required: [true, "Time/Duration cannot be empty!"],
      minlength: [3, "Time/Duration must be at least 3 characters long"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const advantagesModel = mongoose.model("advantages", DataSchema);

module.exports = advantagesModel;
