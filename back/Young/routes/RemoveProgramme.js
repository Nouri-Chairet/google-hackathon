const express = require('express');
const Programme = require('../models/Programme');

const router = express.Router();

// Route to delete a programme by name
router.delete('/deleteProgramme/:nomProgramme', async (req, res) => {
    try {
        const nomProgramme = req.params.nomProgramme;
        const deletedProgramme = await Programme.findOneAndDelete({ nomProgramme: nomProgramme });

        if (!deletedProgramme) {
            return res.status(404).json({ message: 'Programme not found' });
        }

        res.status(200).json({ message: 'Programme deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = router;