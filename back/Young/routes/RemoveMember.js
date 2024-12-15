const express = require('express');
const mongoose = require('mongoose');
const Member = require('../models/Member');
const Parent = require('../models/Parent');

const router = express.Router();

// Route to remove a member by idInscri
router.delete('/removeMember/:idInscri', async (req, res) => {
    const { idInscri } = req.params;

    try {
        // Find the member by idInscri
        const member = await Member.findOneAndDelete({ idInscri });

        if (!member) {
            return res.status(404).json({ message: 'Member not found' });
        }

        // Find the parent by NCIN
        const parent = await Parent.findOne({ NCIN: member.ParentNcin });

        if (parent) {
            // Remove the member from the parent's enfants array
            parent.enfants = parent.enfants.filter(enfant => enfant.idInscri !== member.idInscri);

            // If the parent's enfants array is empty, remove the parent
            if (parent.enfants.length === 0) {
                await Parent.findOneAndDelete({ NCIN: member.ParentNcin });
            } else {
                await parent.save();
            }
        }

        res.status(200).json({ message: 'Member and parent (if applicable) removed successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

module.exports = router;