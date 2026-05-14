const express = require('express')
const router = express.Router()
const ctrl = require('./profesionales.controller')
const auth = require('../../middlewares/auth.middleware')
const rol = require('../../middlewares/rol.middleware')

// GET público (sin auth) para que el front pueda listar profesionales fácilmente
// GET con auth en detalle
router.get('/',       auth, ctrl.getAll)
router.get('/:id',    auth, ctrl.getById)
router.post('/',      auth, rol('administrador'), ctrl.create)
router.put('/:id',    auth, ctrl.update)
router.delete('/:id', auth, rol('administrador'), ctrl.remove)

module.exports = router
