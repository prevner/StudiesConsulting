var express = require('express')
var router = express.Router()
var ProcedureController = require('../Controllers/ProcedureControlleur')


/**
* @swagger
*  /api/Procedure/:
*   get:
*     summary : Récupérer la liste des Procedures 
*     tags: [Procedure]
*     responses:
*       200:
*         description: liste des Procedures
*       500:
*         description:   erreur de recuperation
*       404:
*         description: Liste des Procedures vides
* 
*/



router.get('/', ProcedureController.list)

/**
 * @swagger
 * /api/Procedure/{id}:
 *   get:
 *     summary : Récupérer la description d'une Procedure par Id
 *     tags: [Procedure]
 *     parameters:
 *       - in: path
 *         name: id
 *     responses:
 *       200:
 *         description: description du Procedure
 *       500:
 *         description:   erreur de recuperation
 *       404:
 *         description: Le Procedure n'est pas trouvé
 */
router.get('/:id', ProcedureController.getOneProcedures)







/**
 * @swagger
 * /api/Procedure/{id}:
 *   put:
 *     summary : modifier un Procedure  à partir de son Id
 *     consumes:
 *          - application/json
 *     tags: [Procedure] 
 *     parameters:  
 *          - in: path
 *            name: id
 *          - in: body
 *            name: designation
 *            type: string
 *            schema:
 *              type: object
 *              required:
 *                - designation
 *              properties:
 *                  designation:
 *                   type: string
 *     responses:
 *       200:
 *         description: Procedure desactivé
 *       400:
 *         description: Procedure non desactivé
 *       500:
 *         description: erreur de récupération
 */
router.put('/:id',ProcedureController.update)

/**
 * @swagger
 * /api/Procedure/desactiver/{id}:
 *   put:
 *     summary : desactiver une Procedure à partir de son id
 *     tags: [Procedure] 
 *     parameters:
 *          - in: path
 *            name: id
 *            description: id de la Procedure
 *            schema:
 *              type: object
 *              required:
 *                - id
 *              properties:
 *                  id:
 *                  type: string
 *     responses:
 *       200:
 *         description: Procedure desactivée
 *       400:
 *         description: Procedure non desactivée
 *       500:
 *         description: erreur de récupération
 */
router.put('/desactiver/:id',ProcedureController.desactiver)
/* router.delete('/:id',ProcedureController.remove)  */


/**
 * @swagger
 * /api/Procedure/add:
 *   post:
 *     summary : ajouter un Procedure 
 *     consumes:
 *          - application/json
 *     tags: [Procedure] 
 *     parameters:            
 *          - in: body
 *            name: Procedure
 *            description: nouvelle Procedure
 *            schema:
 *              type: object
 *              required:
 *                - designation
 *              properties:
 *                  designation:
 *                   type: string                 
 *     responses:
 *       200:
 *         description: Procedure modifié
 *       400:
 *         description: Procedure non modifié
 *       500:
 *         description: erreur de récupération
 */
router.post('/add', ProcedureController.add)




module.exports = router