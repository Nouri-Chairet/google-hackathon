const express = require('express');
const Programme = require('../models/Programme');

const router = express.Router();

// Route to modify a programme by name
router.put('/modifyProgramme', async (req, res) => {
    const { nomProgramme, duree, sessions } = req.body;

    try {
        const programme = await Programme.findOneAndUpdate(
            { nomProgramme: nomProgramme },
            { duree: duree, sessions: sessions },
            { new: true }
        );

        if (!programme) {
            return res.status(404).json({ message: 'Programme not found' });
        }

        res.json(programme);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;