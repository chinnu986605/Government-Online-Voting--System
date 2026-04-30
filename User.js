const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    voterId: String,
    role: { type: String, default: "voter" },
    hasVoted: { type: Boolean, default: false },
    faceDescriptor: [Number]
});

module.exports = mongoose.model("User", UserSchema);