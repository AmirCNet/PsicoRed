const pacientesService = require('./pacientes.service')

const getAll = async (req, res) => {
  try {
    res.json(await pacientesService.getAll(req.user.id, req.user.rol))
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const getById = async (req, res) => {
  try {
    res.json(await pacientesService.getById(req.params.id))
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}

const create = async (req, res) => {
  try {
    const { nombre, apellido } = req.body
    if (!nombre || !apellido) {
      return res.status(400).json({ error: 'nombre y apellido son requeridos' })
    }
    res.status(201).json(await pacientesService.create(req.body, req.user.id))
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

const update = async (req, res) => {
  try {
    res.json(await pacientesService.update(req.params.id, req.body))
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

const remove = async (req, res) => {
  try {
    res.json(await pacientesService.remove(req.params.id))
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

module.exports = { getAll, getById, create, update, remove }
