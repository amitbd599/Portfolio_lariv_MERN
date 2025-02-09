const mongoose = require("mongoose");
const DataSchema = new mongoose.Schema(
  {
    clientName: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    reviewText: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const testimonialModel = mongoose.model("testimonials", DataSchema);

module.exports = testimonialModel;
