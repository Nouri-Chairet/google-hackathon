const express = require('express');
const Programme = require('../models/Programme');

const router = express.Router();

// Route to find a programme by its name
router.get('/findProgramme/:nomProgramme', async (req, res) => {
    try {
        const programme = await Programme.findOne({ nomProgramme: req.params.nomProgramme });
        if (!programme) {
            return res.status(404).json({ message: 'Programme not found' });
        }
        res.json(programme);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;