const mongoose = require('mongoose')
const Schema = mongoose.Schema

var ConcernerSchema = ({
    'datecreation' : {type:Date, default: Date.now}, 
    'niveau' : {type: String, required : false},   
    'Procedure' : [{type:Schema.Types.ObjectId, ref: 'Procedure'}]        
    ,
    'Etudiant' : {
        type: Schema.Types.ObjectId,
        ref: 'Etudiant'
    }
})

module.exports = mongoose.model('Concerner', ConcernerSchema)