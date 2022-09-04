var express = require('express')
let router  = express.Router()
var UtilisateurControlleur = require('../Controllers/UtilisateurControlleur')


/**
 * @swagger
 * /api/utilisateurs/signup:
 *   post:
 *     summary : s'enrégistrer à la plateforme
 *     consumes:
 *          - application/json
 *     tags: [Utilisateurs] 
 *     parameters:            
 *          - in: body
 *            name: Utilisateurs
 *            description: nouveau Utilisateurs
 *            schema:
 *              type: object
 *              required:
 *                - email
 *                - password
 *              properties:
 *                  nom:
 *                   type: string
 *                  prenom:
 *                   type: string
 *                  email:
 *                   type: string
 *                  adresse:
 *                   type: string
 *                  tel:
 *                   type: string
 *                  password:
 *                   type: string
 *                  userType:
 *                   type: string
 *     responses:
 *       200:
 *         description: Utilisateurs modifié
 *       400:
 *         description: Utilisateurs non modifié
 *       500:
 *         description: erreur de récupération
 */
router.post('/signup', UtilisateurControlleur.signup)


/**
 * @swagger
 * /api/utilisateurs/login:
 *   post:
 *     summary : s'enrégistrer à la plateforme
 *     consumes:
 *          - application/json
 *     tags: [Utilisateurs] 
 *     parameters:            
 *          - in: body
 *            name: Utilisateurs
 *            description: nouveau Utilisateurs
 *            schema:
 *              type: object
 *              required:
 *                - email
 *                - password
 *              properties:
 *                  email:
 *                   type: string
 *                  password:
 *                   type: string
 *     responses:
 *       200:
 *         description: Utilisateurs modifié
 *       400:
 *         description: Utilisateurs non modifié
 *       500:
 *         description: erreur de récupération
 */


router.post('/login', UtilisateurControlleur.login)

 /**
* @swagger
*  /api/utilisateurs/list:
*   get:
*     summary : Récupérer la liste des utilisateurs d'un utilisateur
*     tags: [Utilisateurs]
*     responses:
*       200:
*         description: liste des utilisateurs
*       500:
*         description:   erreur de recuperation
*       404:
*         description: Liste des utilisateurs vides
* 
*/
router.get('/list', UtilisateurControlleur.list)

module.exports = router