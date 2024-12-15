const express = require('express');
const mongoose = require('mongoose');
const Programme = require('../models/Programme'); // Adjust the path as necessary

const router = express.Router();

router.post('/addProgramme', async (req, res) => {
    const { nomProgramme, duree, sessions } = req.body;

    if (!nomProgramme || !duree || !Array.isArray(sessions)) {
        return res.status(400).json({ message: 'Invalid input' });
    }

    try {
        const newProgramme = new Programme({
            nomProgramme,
            duree,
            sessions
        });

        await newProgramme.save();
        res.status(201).json(newProgramme);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

module.exports = router;