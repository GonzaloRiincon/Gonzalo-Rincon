const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
      unique: true
    },
    avatar: {
      type: String,
      default: 'https://i.stack.imgur.com/l60Hf.png'
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ['USER', 'EDITOR', 'ADMIN'],
      default: 'USER',
      required: true
    }
  },
  {
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;