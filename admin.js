const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const Candidate = require("../models/Candidate");

// Add candidate
router.post("/add", auth, async (req, res) => {
    if (req.user.role !== "admin")
        return res.status(403).json({ msg: "Access denied" });

    const candidate = new Candidate(req.body);
    await candidate.save();

    res.json({ msg: "Candidate added" });
});

module.exports = router;