
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const Schema = mongoose.Schema


var UtilisateurSchema = ({
    'nom' : {type: String, require: true},
    'prenom': {type: String, require: false},    
    'email' : {type: String, require: true, unique: true},
    'tel' : {type: String, require: false},
    'password' : {type: String, require: true},
    'userType': {
        type: String,
        enum : ['admin','directeur', 'secrétaire'],
        default: 'secrétaire'
    },
    'etat': {
        type: String,
        enum : ['Activé','Desactivé'],
        default: 'Activé'
    }
    
    
})


module.exports = mongoose.model('Utilisateur', UtilisateurSchema)