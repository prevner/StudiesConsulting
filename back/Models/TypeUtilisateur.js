const mongoose = require('mongoose')
const Schema = mongoose.Schema

var TypeUtilisateurSchema = ({
    'type_utilisateur' : {type: String, require: true},
    'Etat': {
        type: String,
        enum : ['Activé','Desactivé'],
        default: 'Activé'
    }
})
module.exports = mongoose.model('TypeUtilisateur',TypeUtilisateurSchema)