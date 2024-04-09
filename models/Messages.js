const mongoose = require("mongoose");

const MessagesSchema = mongoose.Schema({
  from: { type: String, required: true },
  to: { type: String, required: true },
  query: { type: String, required: true },
  type: { type: String, required: true },
  messageId: { type: String, required: true },
  reply: { type: String },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("messages", MessagesSchema);
