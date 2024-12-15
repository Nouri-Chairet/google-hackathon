const express = require('express');
const Program = require('../models/Programme'); // Assuming you have a Program model

const router = express.Router();

// Route to get all programs
router.get('/programs', async (req, res) => {
    try {
        const programs = await Program.find();
        res.json(programs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;