const mongoose = require('mongoose')
const Schema = mongoose.Schema

var OperationSchema = ({
    'description' : {type: String, 
                    default : 'inscription'},
    'montant' : {type: Number, require: false},
    'datecreation' : {type:Date, default: Date.now},
    'Utilisateur' : {
        type: Schema.Types.ObjectId,
        ref: 'Utilisateur'
    },
    'Procedure' : {
        type: Schema.Types.ObjectId,
        ref: 'Procedure'
    },   
    'Etudiant' : {
        type: Schema.Types.ObjectId,
        ref: 'Etudiant'
    },
    'TypeOperation': {
        type: String,
        enum : ['Recette','Dépense'],
        default: 'Recette'
    }
})

module.exports = mongoose.model('Operation', OperationSchema)