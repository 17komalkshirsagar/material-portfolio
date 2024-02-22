const mongoose = require("mongoose")
const testSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    number: {
        type: Number,

    },

}, { timestamps: true })

module.exports = mongoose.model("portfolioself", testSchema)   