const mongoose = require('mongoose');
const Session = require('./Session');

const ProgrammeSchema = new mongoose.Schema({
    nomProgramme: {
        type: String,
        required: true
    },
    duree: {
        type: Number,
        required: true
    },
    sessions: {
        type: [Session.schema],
        default:[]
    }
});

module.exports = mongoose.model('Programme', ProgrammeSchema);