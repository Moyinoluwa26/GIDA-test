// backend/models/Desk.js
const mongoose = require('mongoose');

const deskSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    type: { type: String, required: true },
    booked: { type: Boolean, default: false },
});

module.exports = mongoose.model('Desk', deskSchema);
