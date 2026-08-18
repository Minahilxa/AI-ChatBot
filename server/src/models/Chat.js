const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
  {
    userMessage: {
      type: String,
      required: true,
      trim: true,
    },
    aiResponse: {
      type: String,
      required: true,
    },
    sessionId: {
      type: String,
      index: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Chat", chatSchema);
