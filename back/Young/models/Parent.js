const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Member = require('./Member');

// Define the Paiement schema
const PaiementSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    nbrSessionsNonPayee: {
        type: Number,
        required: true
    }
});

// Define the Parent schema
const ParentSchema = new Schema({
    NCIN: {
        type: String,
        required: true,
        length: 8
    },
    email: {
        type: String,
        required: true
    },
    nom: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true
    },
    enfants: {
        type: [Member.schema],
        required: true
    },
    historiquePaiement: [PaiementSchema],
    paiementSessions: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Parent', ParentSchema);