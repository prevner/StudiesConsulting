var OperationModel = require('../models/Operation')
var ConcernerModel = require('../models/Concerner')


module.exports = {
    add: (req, res)=>{
            var newOperation = new OperationModel({
                description: req.body.description,
                montant: req.body.montant,
                Procedure: req.body.PorteurID,
                Utilisateur: req.body.Utilisateur
            })
            newOperation.save((err, Operation)=>{
                if (err) {
                    return res.status(500).json({
                        status: 400,
                        message: err
                    })
                }
                return res.status(201).json({
                    status: 201,
                    message: 'Operation créer'
                })
            })
        
    },

    update: (req, res)=>{
      const id = req.params.id
      OperationModel.findOne({_id: id}, (err, Operation)=>{
          if (err) {
              return res.status(500).json({
                  status: 500,
                  message: 'erreur de recuperation',
                  error: err
              })
          }
          if (!Operation) {
              return res.status(404).json({
                  status: 404,
                  message: 'ce Operation est introuvable'
              })
          }
          Operation.description = req.body.titre ? req.body.titre: Operation.titre
          Operation.description = req.body.description ? req.body.description: Operation.description
          Operation.montant = req.body.montant ? req.body.montant: Operation.montant
          Operation.duree = req.body.duree ? req.body.duree: Operation.duree

          Operation.save((err, Operation)=>{
              if (err) {
                  return res.status(500).json({
                      status: 500,
                      message: 'erreur de recuperation',
                      error: err
                  })
              }
              return res.status(200).json({
                  status: 200,
                  message: 'Operation modifié'
              })
              
          })
      })
  },

  remove: (req, res)=>{
      const id = req.params.id
      OperationModel.findByIdAndRemove(id, (err, Operation)=>{
          if (err) {
              return res.status(500).json({
                  status: 500,
                  message: 'erreur de recuperation',
                  error: err
              })
          }
          if (!Operation) {
              return res.status(404).json({
                  status: 404,
                  message: 'ce Operation est introuvable'
              })
          }
          return res.status(200).json({
              status: 200,
              message: 'Operation a été supprimé'
          })
      })
  },
   getOneProject:(req,res)=>{
    const id = req.params.id

        OperationModel.findOne({_id: id}, (err, Operation)=>{
            if (err) {
                return res.status(500).json({
                    status: 500,
                    message: 'erreur de recuperation'
                })
            }
            if(!Operation){
                return res.status(404).json({
                    status: 404,
                    message: 'ce Operation est introuvable'
                })
            }
            return res.status(200).json({
                status: 200,
                Operation: Operation
            })
        })
   },

    getAllProject: (req,res) =>{
     OperationModel.find((err, Operations)=>{
            if (err) {
                return res.status(500).json({
                    status: 500,
                    message: 'erreur de recuperation'
                })
            }
            return res.status(200).json({
                status: 200,
                Operation: Operations,
                message: 'liste des Operations'
            })
        }).populate("PorteurID")
        .populate("categorie")
      },
      getProjectByCategory: (req,res) =>{
      const id = req.params.id
     OperationModel.find({categorie: id},(err, Operations)=>{
            if (err) {
                return res.status(500).json({
                    status: 500,
                    message: 'erreur de recuperation'
                })
            }
            return res.status(200).json({
                status: 200,
                Operation: Operations,
                message: 'liste des Operations'
            })
        })
          .populate("PorteurID")
      },
    getProjectByUser: (req,res) =>{
      const id = req.params.id
     OperationModel.find({PorteurID: id},(err, Operations)=>{
            if (err) {
                return res.status(500).json({
                    status: 500,
                    message: 'erreur de recuperation'
                })
            }
            return res.status(200).json({
                status: 200,
                Operation: Operations,
                message: 'liste des Operations'
            })
        })
      },
      validate: (req,res)=>{     
        
        let Etat = 'interesser'
        OperationModel.updateOne({ _id: req.params.id }, {Etat , _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Operation validé !'}))
    .catch(error => res.status(400).json({ error }));

      }
}
