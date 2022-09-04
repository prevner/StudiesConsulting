const mongoose = require('mongoose')
const Schema = mongoose.Schema


var ProcedureSchema = ({
    'designation' : {type: String, require: true},
    'Etat': {
        type: String,
        enum : ['Activé','Desactivé'],
        default: 'Activé'
    }
})

module.exports = mongoose.model('Procedure',ProcedureSchema)