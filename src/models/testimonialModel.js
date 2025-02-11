const mongoose = require("mongoose");
const DataSchema = new mongoose.Schema(
  {
    clientName: {
      type: String,
      required: [true, "Client Name cannot be empty!"],
      minlength: [3, "Client Name must be at least 3 characters long"],
    },
    address: {
      type: String,
      required: [true, "Address cannot be empty!"],
      minlength: [3, "Address must be at least 3 characters long"],
    },
    img: {
      type: String,
      required: [true, "Image cannot be empty!"],
    },
    reviewText: {
      type: String,
      required: [true, "Review Text cannot be empty!"],
      minlength: [10, "Review Text must be at least 10 characters long"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const testimonialModel = mongoose.model("testimonials", DataSchema);

module.exports = testimonialModel;
