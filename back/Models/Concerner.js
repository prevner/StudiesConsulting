const mongoose = require('mongoose')
const Schema = mongoose.Schema

var ConcernerSchema = ({
    'datecreation' : {type:Date, default: Date.now},    
    'Procedure' : {
        type: Schema.Types.ObjectId,
        ref: 'Procedure'
    },
    'Etudiant' : {
        type: Schema.Types.ObjectId,
        ref: 'Etudiant'
    }
})

module.exports = mongoose.model('Concerner', Concerner)