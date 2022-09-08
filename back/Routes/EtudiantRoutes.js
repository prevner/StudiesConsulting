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
 *                  tuteur: 
 *                   type: string
 *                  telTuteur:
 *                   type: string
 *                  adresseTuteur:
 *                   type: string
 *                  montont:
 *                   type: number
 *                  niveau:
 *                   type: string
 *                                     
 *                   
 *     responses:
 *       200:
 *         description: Etudiant enrégistré
 *       400:
 *         description: Echec d'enrégistrement
 *       500:
 *         description: erreur de récupération
 */
 router.post('/add', EtudiantController.add)


 /**
* @swagger
*  /api/Etudiants/:
*   get:
*     summary : Récupérer la liste des Etudiants 
*     tags: [Etudiant]
*     responses:
*       200:
*         description: liste des Etudiants
*       500:
*         description:   erreur de recuperation
*       404:
*         description: Liste des Etudiants vides
* 
*/



router.get('/', EtudiantController.getAllEtudiant)


 module.exports = router