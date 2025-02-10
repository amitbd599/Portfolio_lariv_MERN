const mongoose = require("mongoose");
const commentsModel = require("../models/commentsModel");
const ObjectId = mongoose.Types.ObjectId;

// create comment
exports.createComment = async (req, res) => {
  try {
    const { blogId, userName, commentText, parentId } = req.body;
    if (!blogId || !userName || !commentText) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    // const result = await commentsModel.create({
    //   blogId,
    //   userName,
    //   commentText,
    //   parentId: parentId || null,
    // });

    // return res.status(201).json({
    //   success: true,
    //   data: result,
    //   message: "Comment add successful.",
    // });

    const newComment = new commentsModel({
      blogId,
      userName,
      commentText,
      parentId: parentId || null,
    });

    await newComment.save();
    res.status(201).json({
      success: true,
      message: "Comment added successfully",
      comment: newComment,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.toString(),
    });
  }
};

// get Comments By Blog
exports.getCommentsByBlog = async (req, res) => {
  try {
    const { blogId } = req.params;

    // Match comments for the given blogId (Only Top-Level)
    let match = {
      $match: { blogId: new mongoose.Types.ObjectId(blogId), parentId: null },
    };
    // Lookup for replies
    let joinWithParentId = {
      $lookup: {
        from: "comments", // Collection name (should match MongoDB)
        localField: "_id", // Match _id of top-level comments
        foreignField: "parentId", // Find replies where parentId matches top-level comment _id
        as: "replies",
      },
    };

    // Sort by createdAt (newest first)
    let sort = { $sort: { createdAt: -1 } };

    // Sort replies by createdAt (oldest first)
    let repliesByCreatedAt = {
      $addFields: {
        replies: {
          $sortArray: { input: "$replies", sortBy: { createdAt: 1 } },
        },
      },
    };

    const comments = await commentsModel.aggregate([
      match,
      joinWithParentId,
      sort,
      repliesByCreatedAt,
    ]);

    res.status(200).json({ success: true, comments });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
