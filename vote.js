const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const User = require("../models/User");
const Candidate = require("../models/Candidate");

// Vote
router.post("/cast", auth, async (req, res) => {
    const user = await User.findById(req.user.id);

    if (user.hasVoted)
        return res.status(400).json({ msg: "Already voted" });

    const candidate = await Candidate.findById(req.body.candidateId);

    candidate.votes += 1;
    await candidate.save();

    user.hasVoted = true;
    await user.save();

    res.json({ msg: "Vote casted" });
});

// Results
router.get("/results", async (req, res) => {
    const data = await Candidate.find();
    res.json(data);
});

module.exports = router;