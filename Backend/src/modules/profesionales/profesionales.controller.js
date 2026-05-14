const profesionalesService = require('./profesionales.service')

const getAll = async (req, res) => {
  try {
    res.json(await profesionalesService.getAll())
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const getById = async (req, res) => {
  try {
    res.json(await profesionalesService.getById(req.params.id))
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}

const create = async (req, res) => {
  try {
    const data = await profesionalesService.create(req.body)
    res.status(201).json(data)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

const update = async (req, res) => {
  try {
    res.json(await profesionalesService.update(req.params.id, req.body))
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

const remove = async (req, res) => {
  try {
    res.json(await profesionalesService.remove(req.params.id))
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

module.exports = { getAll, getById, create, update, remove }
