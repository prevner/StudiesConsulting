var UtilisateurModel = require('../Models/Utilisateur')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {
    signup: (req, res)=>{
        bcrypt.hash(req.body.password, 10, (err, hash)=>{
            if (err) {
                return res.status(500).json({
                    status: 500,
                    message: err.message
                })
            }

            const newUtilisateur = new UtilisateurModel({
                nom: req.body.nom,
                prenom: req.body.prenom,
                email: req.body.email,
                adresse: req.body.adresse,
                tel: req.body.tel,
                password: hash
            })
            let id = newUtilisateur._id
            newUtilisateur.save((err, user)=>{
                if (err) {
                    return res.status(400).json({
                        status: 400,
                        message: err.message
                    })
                }
                /* let id = newUtilisateur._id
            console.log({_id}) */
                /* return res.status(201).json({
                    status: 201,
                    message: 'Utilisateur  créer !'
                }) */
            })

            
            console.log({id})
            
        })
    },
    login: (req, res)=>{
        UtilisateurModel.findOne({email: req.body.email}, (err, utilisateur)=>{
            if (err) {
                return res.status(404).json({
                    status: 404,
                    message: 'Utilisateur non trouvé !'
                })
            }

            bcrypt.compare(req.body.password, utilisateur.password, (err, valid)=>{
                if (err) {
                    return res.status(500).json({
                        status: 500,
                        message: err.message
                    })
                }
                if (!valid) {
                    return res.status(401).json({
                        status: 401,
                        message: "Bad Password !"
                    })
                }

                return res.status(200).json({
                    _id: utilisateur._id,
                    utilisateur: utilisateur,
                    token: jwt.sign(
                        {_id: utilisateur._id},
                        process.env.TOKEN_SECRET,
                        {expiresIn: '24h'}
                    )
                })

            })
        })
    },
    list: (req, res)=>{
       /*  const type = ['investisseur','porteur'] */
        /* UtilisateurModel.find({userType: type},(err, utilisateurs)=>{ */
        UtilisateurModel.find((err, utilisateurs)=>{
            if (err) {
                return res.status(500).json({
                    status: 500,
                    message: 'erreur de recuperation'
                })
            }
            return res.status(200).json({
                status: 200,
                utilisateur: utilisateurs,
                message: 'liste des utilisateurs'
            })
        })
    }
}