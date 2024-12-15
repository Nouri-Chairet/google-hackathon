const express = require('express');
const Member = require('../models/Member');
const Parent = require('../models/Parent');

const router = express.Router();

// Route to register a member and his parent
router.post('/register', async (req, res) => {
    try {
        const { parentData, memberData } = req.body;

        // Create a new member
        const newMember = new Member(memberData);

        // Save the member to the database
        const savedMember = await newMember.save();

        // Add the member to the parent's enfants array
        parentData.enfants = [savedMember];

        // Create a new parent
        const newParent = new Parent(parentData);

        // Save the parent to the database
        const savedParent = await newParent.save();

        res.status(201).json({
            message: 'Member and Parent registered successfully',
            member: savedMember,
            parent: savedParent
        });
    } catch (error) {
        res.status(500).json({ message: 'Error registering member and parent', error });
    }
});

module.exports = router;