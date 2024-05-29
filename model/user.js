const { default: mongoose } = require("mongoose");

const USER = mongoose.model('User', {
    name: String,
    age: Number,
    email: String,
    profile: String
})

module.exports = {USER}