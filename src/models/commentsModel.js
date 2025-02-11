const mongoose = require("mongoose");
const DataSchema = new mongoose.Schema(
  {
    blogId: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Blog ID cannot be empty!"],
    },
    userName: {
      type: String,
      required: true,
      required: [true, "Name cannot be empty!"],
      minlength: [3, "Name must be at least 3 characters long"],
    },
    commentText: {
      type: String,
      required: [true, "Comment cannot be empty"],
      minlength: [3, "Comment must be at least 3 characters long"],
    },
    parentId: {
      type: mongoose.Schema.Types.ObjectId,
      default: null, // For nested comments (replies)
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const commentsModel = mongoose.model("comments", DataSchema);

module.exports = commentsModel;
