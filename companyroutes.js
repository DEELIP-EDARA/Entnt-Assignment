const express = require('express');
const router = express.Router();
const Company = require('../models/company');

// Get all companies
router.get('/', async (req, res) => {
    try {
        const companies = await Company.find();
        res.json(companies);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new company
router.post('/', async (req, res) => {
    const company = new Company(req.body);
    try {
        const savedCompany = await company.save();
        res.status(201).json(savedCompany);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;