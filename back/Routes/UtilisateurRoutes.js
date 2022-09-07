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

/**
 * @swagger
 * /api/utilisateurs/{id}:
 *   put:
 *     summary : modifier un utilisateur  à partir de son Id
 *     consumes:
 *          - application/json
 *     tags: [Utilisateurs] 
 *     parameters:            
 *          - in: path
 *            name: id           
 *          - in: body
 *            name: utilisateurs
 *            description: modifier un utilisateur
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
 *         description: projet modifié
 *       400:
 *         description: projet non modifié
 *       500:
 *         description: erreur de récupération
 */
 router.put('/:id', UtilisateurControlleur.update)

 /**
 * @swagger
 * /api/utilisateurs/{id}:
 *   get:
 *     summary : Récupérer la description d'un Utilisateurs par Id
 *     tags: [Utilisateurs]
 *     parameters:
 *       - in: path
 *         name: id
 
 *     responses:
 *       200:
 *         description: description du Utilisateurs
 *       500:
 *         description:   erreur de recuperation
 *       404:
 *         description: Le Utilisateurs n'est pas trouvé
 */

router.get('/:id', UtilisateurControlleur.listOne)

module.exports = router