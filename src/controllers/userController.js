const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userModel = require("../models/userModel");
const { EncodeToken } = require("../utility/TokenHelper");
const { COOKIE_EXPIRE_TIME } = require("../config/config");
const ObjectId = mongoose.Types.ObjectId;
//! Create user
exports.registration = async (req, res) => {
  try {
    const { email, firstName, lastName, password } = req.body;

    // Create and save the new user
    user = await userModel.create({ email, firstName, lastName, password });
    res.status(201).json({
      success: true,
      message: "User created successfully",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      // Mongoose validation errors
      const messages = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({ success: false, message: messages[0] });
    }

    if (error.code === 11000) {
      // Duplicate key error (unique constraint)
      return res.status(409).json({
        success: false,
        message: "Email already exists!",
      }); // 409 Conflict
    }

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.toString(),
    });
  }
};

//! User Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user)
      return res
        .status(401)
        .json({ success: false, message: "User not found" });

    // Compare password
    const isMatch = await user.comparePassword(password);
    if (!isMatch)
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });

    if (isMatch) {
      let token = EncodeToken(user.email, user._id);

      let options = {
        maxAge: COOKIE_EXPIRE_TIME,
        httpOnly: true,
        sameSite: "none",
        secure: true,
      };

      // Set cookie
      res.cookie("token", token, options);
      res.status(200).json({
        success: true,
        message: "Login successful",
        token: token,
      });
    }
  } catch (e) {
    res.status(500).json({ success: false, error: e.toString() });
  }
};

//! Update user
exports.userUpdate = async (req, res) => {
  try {
    const prevEmail = req.headers.email;
    const { email, firstName, lastName, password } = req.body;

    // Find user by previous email
    const user = await userModel.findOne({ email: prevEmail });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // Prepare update fields
    let updateFields = { email, firstName, lastName, password };

    // If password is provided, validate it manually and hash it
    if (password) {
      if (password.length < 6) {
        return res.status(400).json({
          success: false,
          message: "Password must be at least 6 characters long.",
        });
      }

      const salt = await bcrypt.genSalt(10);
      updateFields.password = await bcrypt.hash(password, salt);
    }

    // Update user
    await userModel.findOneAndUpdate(
      { email: prevEmail },
      { $set: updateFields }
    );

    return res.status(200).json({
      success: true,
      message: "Profile update successful.",
    });
  } catch (error) {
    // Handle duplicate email error
    if (error.code === 11000 && error.keyPattern?.email) {
      return res.status(409).json({
        success: false,
        message: "Email already exists!",
      });
    }

    return res.status(500).json({ success: false, error: error.toString() });
  }
};

//! Update user by id
exports.userUpdateById = async (req, res) => {
  try {
    const id = new ObjectId(req.params.id);
    const { role } = req.body;
    const user = await userModel.findOne({ _id: id });

    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User not found" });

    if (!!user === true) {
      let data = await userModel.updateOne(
        { _id: id },
        {
          $set: {
            role,
          },
        }
      );

      res.status(200).json({
        success: true,
        data: data,
        message: "User role update successful.",
      });
    } else {
      res
        .status(200)
        .json({ success: false, message: "User role update unsuccessful." });
    }
  } catch (e) {
    res.status(200).json({ success: false, data: e.toString() });
  }
};

//! get User
exports.userRead = async (req, res) => {
  try {
    let email = req.headers.email;
    let MatchStage = {
      $match: {
        email,
      },
    };

    let project = {
      $project: {
        password: 0,
      },
    };
    let data = await userModel.aggregate([MatchStage, project]);
    res.status(200).json({ success: true, data: data[0] });
  } catch (e) {
    res.status(200).json({ success: false, error: e.toString() });
  }
};

//! get User id
exports.userReadByID = async (req, res) => {
  try {
    const id = new ObjectId(req.params.id);
    let MatchStage = {
      $match: {
        _id: id,
      },
    };

    let project = {
      $project: {
        email: 1,
        name: 1,
        role: 1,
        img: 1,
      },
    };
    let data = await userModel.aggregate([MatchStage, project]);
    res.status(200).json({ success: true, data: data[0] });
  } catch (e) {
    res.status(200).json({ success: false, error: e.toString() });
  }
};

//! Get all User
exports.getAllUser = async (req, res) => {
  try {
    const limit = parseInt(req.params.item); // Number of items per page
    const pageNo = parseInt(req.params.pageNo); // Current page number

    if (isNaN(limit) || isNaN(pageNo)) {
      return res.status(200).json({ message: "Invalid parameters" });
    }

    const skip = (pageNo - 1) * limit;

    const facet = {
      $facet: {
        users: [
          { $skip: skip },
          { $limit: limit },
          {
            $project: {
              name: 1,
              email: 1,
              role: 1,
              img: 1,
              number: 1,
              createdAt: 1,
            },
          },
        ],
        totalCount: [{ $count: "count" }],
      },
    };

    const project = {
      $project: {
        users: 1,
        totalCount: { $arrayElemAt: ["$totalCount.count", 0] },
      },
    };

    const result = await userModel.aggregate([facet, project]);
    res.status(200).json({ success: true, data: result[0] });
  } catch (error) {
    res.status(200).json({ success: false, error: error.message });
  }
};

//! user Logout
exports.logout = async (req, res) => {
  try {
    res.clearCookie("Token");
    res.status(200).json({ success: true, message: "Logout success!" });
  } catch (e) {
    res.status(200).json({ success: false, error: e.toString() });
  }
};

//! delete user
exports.deleteUser = async (req, res) => {
  try {
    const id = new ObjectId(req.params.id);
    const result = await userModel.deleteOne({ _id: id });

    if (result?.deletedCount === 1) {
      res.status(200).json({
        success: true,
        data: result,
        message: "User delete successful!",
      });
    } else {
      res.status(200).json({ success: false, message: "User not found!" });
    }
  } catch (error) {
    res.status(200).json({ success: false, error: error.message });
  }
};
