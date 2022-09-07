var express = require('express')
var router = express.Router()
var EtudiantController = require('../controllers/EtudiantControlleur')

/**
 * @swagger
 * /api/Etudiants/add:
 *   post:
 *     summary : ajouter un Etudiant 
 *     consumes:
 *          - application/json
 *     tags: [Etudiant] 
 *     parameters:            
 *          - in: body
 *            name: Etudiant
 *            description: nouveau Etudiant
 *            schema:
 *              type: object
 *              properties:
 *                  nom:
 *                   type: string
 *                  prenom:
 *                   type: string
 *                  email:
 *                   type: string
 *                  tel:
 *                   type: string
 *                  string:
 *                   tuteur: string
 *                  telTuteur:
 *                   type: string
 *                  adresseTuteur:
 *                   type: string
 *                  categorie:
 *                   type: string
 *                  categorie:
 *                   type: string
 *     responses:
 *       200:
 *         description: Etudiant modifié
 *       400:
 *         description: Etudiant non modifié
 *       500:
 *         description: erreur de récupération
 */
 router.post('/add', EtudiantController.add)