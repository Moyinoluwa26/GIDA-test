// backend/routes/bookingRoutes.js
const express = require('express');
const Booking = require('../models/Bookings');
const Desk = require('../models/Desk');
const router = express.Router();

// Get all bookings
router.get('/', async (req, res) => {
    const bookings = await Booking.find();
    res.json(bookings);
});

// Create a new booking
router.post('/', async (req, res) => {
    const { deskId, hours, membership, total } = req.body;
    const booking = new Booking({ deskId, hours, membership, total });
    await booking.save();

    await Desk.updateOne({ id: deskId }, { booked: true });

    res.json(booking);
});

module.exports = router;
