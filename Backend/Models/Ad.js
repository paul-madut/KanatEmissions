const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  device: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
      type: Number,
      required: true,
  },
  location: {
      type: String,
      required: true,
  },
  description: {
      type: String,
  },
  seller: {
      type: String,
      required: true,
  },



});

const userModel = mongoose.model("users", UserSchema);
module.exports = userModel;