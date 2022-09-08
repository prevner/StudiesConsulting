var express = require('express')
var router = express.Router()
var OperationController = require('../Controllers/OperationControlleur')

/**
 * @swagger
 * /api/Operation/add:
 *   post:
 *     summary : ajouter une operation 
 *     consumes:
 *          - application/json
 *     tags: [operation] 
 *     parameters:            
 *          - in: body
 *            name: operation
 *            description: nouvelle operation
 *            schema:
 *              type: object
 *              required:
 *                - utilisateur
 *                - description
 *              properties:
 *                  description:
 *                   type: string                  
 *                  montant:
 *                   type: number
 *                  Utilisateur:
 *                    type: string
 *                  TypeOperation:
 *                    type: string
 *     responses:
 *       200:
 *         description: operation modifié
 *       400:
 *         description: operation non modifié
 *       500:
 *         description: erreur de récupération
 */
 router.post('/add', OperationController.add)

 /**
* @swagger
*  /api/Operations/:
*   get:
*     summary : Récupérer la liste des operations 
*     tags: [operation]
*     responses:
*       200:
*         description: liste des operations
*       500:
*         description:   erreur de recuperation
*       404:
*         description: Liste des operations vides
* 
*/


router.get('/', OperationController.getAllOperation) 




module.exports = router