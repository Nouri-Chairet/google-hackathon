const express = require('express');
const mongoose = require('mongoose');
const Groupe = require('../models/Groupe'); // Adjust the path as necessary

const router = express.Router();

// Route to create a new groupe
router.post('/addGroupe', async (req, res) => {
    const { programmeName, groupNumber, currentSession } = req.body;

    try {
        const newGroupe = new Groupe({
            programmeName,
            groupNumber,
            currentSession
        });

        await newGroupe.save();
        res.status(201).json({ message: 'Groupe created successfully', groupe: newGroupe });
    } catch (error) {
        res.status(400).json({ message: 'Error creating groupe', error: error.message });
    }
});

module.exports = router;