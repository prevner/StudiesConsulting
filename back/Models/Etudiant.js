
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
require('mongoose-type-email');
const Schema = mongoose.Schema


var EtudiantSchema = ({
    'nom' : {type: String, require: true},
    'prenom': {type: String, require: false},    
    'email' : {type: String, require: true, unique: true},
    'tel' : {type: String, require: false},
    'tuteur' : {type: String, require: true},
    'telTuteur' : {type: String, require: true},
    'adresseTuteur' : {type: String, require: true},
    
    'etat': {
        type: String,
        enum : ['Activé','Desactivé'],
        default: 'Activé'
    }      
})


module.exports = mongoose.model('Etudiant', EtudiantSchema)