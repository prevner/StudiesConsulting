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

            

            
          /* console.log(req.body)  */
        
          let test = [MonIdEt,MonIdEt]; 
         
         
            let newConcerner = new ConcernerModel({               
                Etudiant: MonIdEt,
                niveau : req.body.niveau                                
            }) 
             
            
            for(let elmt of test)
            {                
                newConcerner.Procedure.push(elmt)               
            }
            newConcerner.save((err,Concerner)=>{
                if(err) return console.error
            })
            
            //enrégistrement de mon opération
            newOperation.save((err, Operation)=>{
                if (err) {
                    return res.status(500).json({
                        status: 400,
                        message: err
                    })
                }else{
                    return res.status(201).json({
                        status: 201,
                        message: 'étudiant(e) enrégistré(e) avec succès'
                }) }             
            })
        
    },
    getAllEtudiant: (req,res) =>{
        ConcernerModel.find((err, Concerners)=>{
               if (err) {
                   return res.status(500).json({
                       status: 500,
                       message: 'erreur de recuperation'
                   })
               }
               return res.status(200).json({
                   status: 200,
                   Etudiant: Concerners,
                   message: 'liste des Etudiants'
               })
           }).populate("Procedure")
           .populate("Etudiant")
    },
    getEtudiantByProcedure: (req,res) =>{
        const id = req.params.id
        ConcernerModel.find({Procedure: id},(err, Concerners)=>{
              if (err) {
                  return res.status(500).json({
                      status: 500,
                      message: 'erreur de recuperation'
                  })
              }
              return res.status(200).json({
                  status: 200,
                  projet: projets,
                  message: 'liste des étudiants'
              })
          })
            .populate("Etudiant")
        }
}


