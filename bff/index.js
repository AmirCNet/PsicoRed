require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { conectar } = require('../bd')
const Profesional = require('../bd/models/profesional')

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

// GET — obtener todos los profesionales
app.get('/api/profesionales', async (req, res) => {
  const lista = await Profesional.find()
  res.json(lista)
})

// POST — agregar un profesional nuevo
app.post('/api/profesionales', async (req, res) => {
  const nuevo = new Profesional(req.body)
  await nuevo.save()
  res.status(201).json(nuevo)
})

// PUT — editar un profesional existente
app.put('/api/profesionales/:id', async (req, res) => {
  const actualizado = await Profesional.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )
  if (!actualizado) return res.status(404).json({ error: 'No encontrado' })
  res.json(actualizado)
})

// DELETE — eliminar un profesional
app.delete('/api/profesionales/:id', async (req, res) => {
  const eliminado = await Profesional.findByIdAndDelete(req.params.id)
  if (!eliminado) return res.status(404).json({ error: 'No encontrado' })
  res.status(204).send()
})

// Conectar a MongoDB y luego levantar el servidor
conectar().then(() => {
  app.listen(PORT, () => {
    console.log(`BFF corriendo en http://localhost:${PORT}`)
  })
})