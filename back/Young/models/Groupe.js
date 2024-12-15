const mongoose = require('mongoose');

const groupeSchema = new mongoose.Schema({
    programmeName: {
        type: String,
        required: true
    },
    groupNumber: {
        type: Number,
        required: true
    },
    currentSession: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

groupeSchema.index({ programmeName: 1, groupNumber: 1 }, { unique: true });

const Groupe = mongoose.model('Groupe', groupeSchema);

module.exports = Groupe;