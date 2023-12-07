const router = require("express").Router();

const mongoose = require("mongoose");

const Resume = require("../models/Resume.model");
const User = require("../models/User.model");
const { isAuthenticated } = require("../middleware/jwt.middleware");

router.post("/create-resume", async (req, res, next) => {
  try {
    const {
      title,
      intro,
      firstName,
      lastName,
      address,
      phone,
      skills,
      certificate,
      education,
      languages,
      workExperience,
      resume,
      img,
      userId,
    } = req.body;

    const newResume = await Resume.create({
      title,
      intro,
      firstName,
      lastName,
      address,
      phone,
      skills,
      certificate,
      education,
      languages,
      workExperience,
      resume,
      img,
      userId: userId,
    });

    await User.findByIdAndUpdate(userId, { $push: { resumes: newResume._id } });
    await Resume.findByIdAndUpdate(newResume._id, { $push: { user: userId } });

    res.json(newResume);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/resumes/:userId", async (req, res, next) => {
  const { userId } = req.params;
  try {
    const allResumes = await User.findById(userId).populate("resumes");
    res.json(allResumes);
  } catch (err) {
    res.json(err);
  }
});

router.put("/resume/edit/:resumeId", async (req, res, next) => {
  try {
    const { resumeId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(resumeId)) {
      res.status(400).json({ message: "Specified id is not valid" });
      return;
    }

    const resumeUpdate = await Resume.findByIdAndUpdate(resumeId, req.body, {
      new: true,
    });
    res.json(resumeUpdate);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.delete("/resume/delete/:userId/:resumeId", async (req, res, next) => {
  const { userId, resumeId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(resumeId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  try {
    const deletedResume = await Resume.findByIdAndDelete(resumeId);

    if (!deletedResume) {
      res.status(404).json({ message: "Resume not found" });
      return;
    }

    const userId = deletedResume.userId;
    console.log("user===========", userId);
    await User.findByIdAndUpdate(userId, { $pull: { resumes: resumeId } });

    res.json({
      message: `Resume with ID ${resumeId} has been removed successfully.`,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
