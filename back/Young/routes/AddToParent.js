const express = require('express');
const mongoose = require('mongoose');
const Parent = require('../models/Parent');
const Member = require('../models/Member');

const router = express.Router();

// Route to register a new member and add to a parent
router.post('/addMemberToParent', async (req, res) => {
    try {
        const { parentId, memberData } = req.body;

        // Create a new member
        const newMember = new Member(memberData);
        await newMember.save();

        // Find the parent and add the new member to the enfants array
        const parent = await Parent.findOne({ NCIN: parentId });
        if (!parent) {
            return res.status(404).json({ message: 'Parent not found' });
        }

        parent.enfants.push(newMember);
        await parent.save();

        res.status(201).json({ message: 'Member registered and added to parent successfully', member: newMember });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred', error });
    }
});

module.exports = router;