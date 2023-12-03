const mongoose = require ("mongoose");
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 3,
        max: 30,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 8,
        max: 30,
    },
});
const User = mongoose.model("User", userSchema);
module.exports = User;