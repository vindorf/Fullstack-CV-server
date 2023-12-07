const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  resumes: [{ type: Schema.Types.ObjectId, ref: "Resume" }],
});

module.exports = model("User", userSchema);
