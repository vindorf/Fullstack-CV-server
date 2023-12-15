const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const resumeSchema = new Schema({
  resumeTitle: String,
  title: String,
  firstName: { type: String },
  lastName: { type: String },
  phone: { type: String },
  street: String,
  city: String,
  email: { type: String },
  linkedin: { type: String },
  website: { type: String },
  skills: String,
  studyyear: String,
  educationTitle: String,
  institute: String,
  educationDescription: String,

  studyyear1: String,
  educationTitle1: String,
  institute1: String,
  educationDescription1: String,

  studyyear2: String,
  educationTitle2: String,
  institute2: String,
  educationDescription2: String,

  language: String,
  intro: String,

  workingyear: String,
  company: String,
  role: String,
  jobDescription: String,

  workingyear1: String,
  company1: String,
  role1: String,
  jobDescription1: String,

  workingyear2: String,
  company2: String,
  role2: String,
  jobDescription2: String,

  workingyear3: String,
  company3: String,
  role3: String,
  jobDescription3: String,

  img: String,
  certificate: [String],
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = model("Resume", resumeSchema);
