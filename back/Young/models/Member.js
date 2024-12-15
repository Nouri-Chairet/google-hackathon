const mongoose = require('mongoose');
const autoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;
const programme = require('./Programme');

const MemberSchema = new Schema({
    idInscri: {
        type: Number,
        unique: true 
    },
    ParentNcin:{
            type: String,
            required: true,
            length: 8
        }
    ,
    nom: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true
    },
    dateNaissance: {
        type: Date,
        required: true
    },
    niveau: {
        type: String,
        required: true
    },
    programme: {
        type: programme.schema,
        required: true
    },
    sessionsHistory: {
        type:[Boolean],
        default:[]
    }
    ,

    numGroup: {
        type: Number,
        required: true
    }
});

MemberSchema.plugin(autoIncrement, {
    inc_field: 'idInscri', 
    start_seq: 1 
});

module.exports = mongoose.model('Member', MemberSchema);