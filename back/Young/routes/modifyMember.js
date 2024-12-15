const express = require('express');
const Member = require('../models/Member');

const router = express.Router();

// Route to modify member data
router.put('/modifyMember/:id', async (req, res) => {
    const { id } = req.params;
    const { niveau, numGroup, sessionsHistory } = req.body;

    try {
        const updatedMember = await Member.findByIdAndUpdate(
            id,
            {
                niveau,
                numGroup,
                sessionsHistory
            },
            { new: true }
        );

        if (!updatedMember) {
            return res.status(404).json({ message: 'Member not found' });
        }

        res.json(updatedMember);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

module.exports = router;