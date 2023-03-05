const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
    
}, { timestamps: true });

module.exports = mongoose.model("doctor", doctorSchema);
