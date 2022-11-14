const { default: mongoose } = require("mongoose");

const todoSchema = new mongoose.Schema({
  todos: {
    type: [
      {
        text: {
          type: String,
          default: "Error",
        },
        isDone: {
          type: Boolean,
          default: false,
        },
      },
    ],
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
  updatedAt: {
    type: Date,
    required: false,
    default: Date.now,
  },
});

module.exports = mongoose.model("Todo", todoSchema);
