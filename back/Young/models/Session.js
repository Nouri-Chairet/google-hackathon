const mongoose = require('mongoose');
const autoIncrement = require('mongoose-sequence')(mongoose);

const sessionSchema = new mongoose.Schema({
    numSession: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    sticker: {
        type: String,
        required: true
    }
});
sessionSchema.plugin(autoIncrement, {
    inc_field: 'numSession',
    start_seq: 1
});

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;