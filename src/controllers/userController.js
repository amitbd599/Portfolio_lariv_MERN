const bcrypt = require("bcryptjs");
const userModel = require("../models/userModel");
const { EncodeToken } = require("../utility/TokenHelper");
const { COOKIE_EXPIRE_TIME } = require("../config/config");
const { default: mongoose } = require("mongoose");
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

    return res.status(500).json({
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
        httpOnly: false,
        sameSite: "none",
        secure: true,
      };

      // Set cookie
      res.cookie("token", token, options);
      return res.status(200).json({
        success: true,
        message: "Login successful",
        token: token,
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.toString(),
    });
  }
};

//! Update user
exports.userUpdate = async (req, res) => {
  try {
    const prevEmail = req.headers.email;
    const user_id = req.headers.user_id;
    const { email, firstName, lastName, password, img } = req.body;

    // Find user by previous email
    const user = await userModel.findOne({ email: prevEmail });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // Prepare update fields
    let updateFields = { email, firstName, lastName, password, img };

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
    let result = await userModel.findByIdAndUpdate(
      { _id: user_id },
      updateFields,
      { new: true, runValidators: true } // Ensures validation is triggered
    );

    // set new token & cookies

    let token = EncodeToken(email, user_id);

    let options = {
      maxAge: COOKIE_EXPIRE_TIME,
      httpOnly: false,
      sameSite: "none",
      secure: true,
    };

    // Set cookie
    res.cookie("token", token, options);
    return res.status(200).json({
      success: true,
      message: "Profile update successful",
      token: token,
    });
  } catch (error) {
    // Handle duplicate email error
    if (error.code === 11000 && error.keyPattern?.email) {
      return res.status(409).json({
        success: false,
        message: "Email already exists!",
      });
    }

    if (error.name === "ValidationError") {
      // Mongoose validation errors
      const messages = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({ success: false, message: messages[0] });
    }

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.toString(),
    });
  }
};

//! user Read
exports.userRead = async (req, res) => {
  console.log(req.headers.email);

  try {
    const user_id = req.headers.user_id;
    let MatchStage = {
      $match: {
        _id: new ObjectId(user_id),
      },
    };

    let project = {
      $project: {
        password: 0,
        createdAt: 0,
        updatedAt: 0,
      },
    };
    let data = await userModel.aggregate([MatchStage, project]);
    return res.status(200).json({ success: true, data: data });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.toString(),
    });
  }
};

//! user Logout
exports.logout = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({ success: true, message: "Logout success!" });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.toString(),
    });
  }
};
