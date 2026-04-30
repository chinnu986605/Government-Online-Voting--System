const express = require("express");
const router = express.Router();

const User = require("../models/User");

// Distance function
function distance(a, b) {
    return Math.sqrt(a.reduce((sum, val, i) => sum + (val - b[i])**2, 0));
}

// Register Face
router.post("/register-face", async (req, res) => {
    const { userId, descriptor } = req.body;

    const user = await User.findById(userId);
    user.faceDescriptor = descriptor;

    await user.save();

    res.json({ msg: "Face Registered" });
});

// Face Login
router.post("/login-face", async (req, res) => {
    const { descriptor } = req.body;

    const users = await User.find();

    for (let user of users) {
        if (!user.faceDescriptor) continue;

        const dist = distance(descriptor, user.faceDescriptor);

        if (dist < 0.5) {
            return res.json({ msg: "Face matched", userId: user._id });
        }
    }

    res.status(401).json({ msg: "Face not recognized" });
});

module.exports = router;