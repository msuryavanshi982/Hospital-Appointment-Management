const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: "String",
      required: true,
      trim: true,
    },
    email: {
      type: "string",
      required: true,
      trim: true,
      unique: true,
    },
    mobile: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    date: {
      type: String,
      required: true,
      trim: true,
    },
    time: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
