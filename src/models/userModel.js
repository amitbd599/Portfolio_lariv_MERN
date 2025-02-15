const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const DataSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
      lowercase: true,
    },
    firstName: {
      type: String,
      required: [true, "First name is required"],
      minlength: [3, "First name must be at least 3 characters"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      minlength: [3, "Last name must be at least 3 characters"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
    },
    img: {
      type: String,
    },
  },
  { timestamps: true, versionKey: false }
);

// Middleware to hash the password before saving
DataSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); // only hash if password is new or changed

  try {
    const salt = await bcrypt.genSalt(10); // generate salt
    this.password = await bcrypt.hash(this.password, salt); // hash the password with the salt
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare entered password with stored password
DataSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const userModel = mongoose.model("users", DataSchema);
module.exports = userModel;
