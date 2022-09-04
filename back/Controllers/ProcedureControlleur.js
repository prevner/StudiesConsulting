var ProcedureModel = require('../models/Procedure')


module.exports = {
    add: (req, res)=>{
            //console.log(req.body.designation)
        
            var newProcedure = new ProcedureModel({
                ...req.body
            })
            newProcedure.save((err, Procedure)=>{
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
        
    },

    update: (req, res)=>{
      const id = req.params.id
      ProcedureModel.findOne({_id: id}, (err, Procedure)=>{
          if (err) {
              return res.status(500).json({
                  status: 500,
                  message: 'erreur de recuperation',
                  error: err
              })
          }
          if (!Procedure) {
              return res.status(404).json({
                  status: 404,
                  message: 'ce Procedure est introuvable'
              })
          }
          Procedure.designation = req.body.designation ? req.body.designation: Procedure.designation
          Procedure.etat = req.body.etat ? req.body.etat: Procedure.etat

          Procedure.save((err, Procedure)=>{
              if (err) {
                  return res.status(500).json({
                      status: 500,
                      message: 'erreur de recuperation',
                      error: err
                  })
              }
              return res.status(200).json({
                  status: 200,
                  message: 'Procedure modifié'
              })
              
          })
      })
  },

  remove: (req, res)=>{
      const id = req.params.id
      ProcedureModel.findByIdAndRemove(id, (err, Procedure)=>{
          if (err) {
              return res.status(500).json({
                  status: 500,
                  message: 'erreur de recuperation',
                  error: err
              })
          }
          if (!Procedure) {
              return res.status(404).json({
                  status: 404,
                  message: 'ce Procedure est introuvable'
              })
          }
          return res.status(200).json({
              status: 200,
              message: 'Procedure a été supprimé'
          })
      })
  },
  getOneProcedures:(req,res)=>{
    const id = req.params.id

        ProcedureModel.findOne({_id: id}, (err, Procedure)=>{
            if (err) {
                return res.status(500).json({
                    status: 500,
                    message: 'erreur de recuperation'
                })
            }
            if(!Procedure){
                return res.status(404).json({
                    status: 404,
                    message: 'ce Procedure est introuvable'
                })
            }
            return res.status(200).json({
                status: 200,
                Procedure: Procedure
            })
        })
   },

    list: (req,res) =>{
     ProcedureModel.find((err, Procedures)=>{
            if (err) {
                return res.status(500).json({
                    status: 500,
                    message: 'erreur de recuperation'
                })
            }
            return res.status(200).json({
                status: 200,
                Procedure: Procedures,
                message: 'liste des Procedures'
            })
        })
      },
      desactiver: (req,res)=>{     
        
        let Etat = 'desactivé'
        ProcedureModel.updateOne({ _id: req.params.id }, {Etat , _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Procedure desactivé !'}))
    .catch(error => res.status(400).json({ error }));

      }
}
