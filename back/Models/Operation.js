const mongoose = require('mongoose')
const Schema = mongoose.Schema

var OperationSchema = ({
    'description' : {type: String, require: false},
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
    'TypeOperation' : {
        type: Schema.Types.ObjectId,
        ref: 'TypeOperation'
    },
    'Etudiant' : {
        type: Schema.Types.ObjectId,
        ref: 'Etudiant'
    }
})

module.exports = mongoose.model('Operation', OperationSchema)