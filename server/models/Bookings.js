// backend/models/Booking.js
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    deskId: { type: Number, required: true },
    hours: { type: Number, required: true },
    membership: { type: String },
    total: { type: Number, required: true },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Booking', bookingSchema);
