var EtudiantModel = require('../models/Etudiant')
var ConcernerModel = require('../models/Concerner')
const OperationModel = require('../Models/Operation')


module.exports = {
    add: (req, res)=>{
            var newEtudiant = new EtudiantModel({
                nom: req.body.nom,
                prenom: req.body.prenom,
                email: req.body.email,
                tel: req.body.tel,
                tuteur: req.body.tuteur,
                telTuteur: req.body.telTuteur,                
                adresseTuteur: req.body.adresseTuteur,
                
            })

           
            

            //enreégistrement de mon étudiant
            newEtudiant.save((err, Etudiant)=>{
                if (err) {
                    return res.status(500).json({
                        status: 400,
                        message: err
                    })
                }               
            })

            //je recupère l'id de mon dernier étudiant
            let MonIdEt = newEtudiant._id

            var newOperation  = new OperationModel({
                description: req.body.description,
                montant: req.body.montant,
                Procedure: req.body.Procedure,
                Utilisateur: req.body.Utilisateur,
                Etudiant: MonIdEt
            })

            

            //enrégistrement de mon opération
            newOperation.save((err, Operation)=>{
                if (err) {
                    return res.status(500).json({
                        status: 400,
                        message: err
                    })
                }               
            })
            

            var newConcerner = new ConcernerModel({
                $push: {Procedure : req.body.Procedure},
                Etudiant: MonIdEt
            })

            newConcerner.save((err, Concerner)=>{
                if (err) {
                    return res.status(500).json({
                        status: 400,
                        message: err
                    })
                }
                return res.status(201).json({
                    status: 201,
                    message: 'Procedure crée'
                })
            })


        
    }
}


