const express = require('express');
const router = express.Router();
const Communication = require('../models/communication');

// Get communications for a company
router.get('/:companyId', async (req, res) => {
    try {
        const communications = await Communication.find({ companyId: req.params.companyId });
        res.json(communications);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new communication
router.post('/', async (req, res) => {
    const communication = new Communication(req.body);
    try {
        const savedCommunication = await communication.save();
        res.status(201).json(savedCommunication);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;