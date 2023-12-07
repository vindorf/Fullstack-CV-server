const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const resumeSchema = new Schema({
  title: String,
  intro: String,
  firstName: { type: String },
  lastName: { type: String },
  address: { street: String, houseNr: String, city: String, country: String },
  phone: { type: String },
  education: [
    {
      instituteName: String,
      degreeName: String,
      startYear: Number,
      endYear: Number,
      description: String,
    },
  ],
  languages: { languageName: String, languageLevel: String },
  workExperience: [
    {
      companyName: String,
      jobTitle: String,
      startYear: Number,
      endYear: Number,
      description: String,
    },
  ],
  img: String,
  skills: { type: Schema.Types.ObjectId, ref: "Skill" },
  certificates: { type: Schema.Types.ObjectId, ref: "Certificate" },
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = model("Resume", resumeSchema);
