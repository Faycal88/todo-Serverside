const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    default: "",
    unique: true,
  },
  list: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Todo",
  },
});

module.exports = mongoose.model("User", userSchema);
