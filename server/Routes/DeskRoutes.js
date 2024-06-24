// backend/routes/deskRoutes.js
const express = require('express');
const Desk = require('../models/Desk');
const router = express.Router();

// Get all desks
router.get('/', async (req, res) => {
    const desks = await Desk.find();
    res.json(desks);
});

// Initialize desks (run once to populate the database)
router.post('/initialize', async (req, res) => {
    const desks = [
        { id: 1, type: 'individual' }, { id: 2, type: 'individual' },
        { id: 3, type: 'individual' }, { id: 4, type: 'individual' },
        { id: 5, type: 'individual' }, { id: 6, type: 'individual' },
        { id: 7, type: 'individual' }, { id: 8, type: 'individual' },
        { id: 9, type: 'individual' }, { id: 10, type: 'individual' },
        { id: 11, type: 'team' }, { id: 12, type: 'team' },
        { id: 13, type: 'team' }, { id: 14, type: 'team' },
        { id: 15, type: 'team' },
    ];
    await Desk.insertMany(desks);
    res.json({ message: 'Desks initialized' });
});

module.exports = router;
