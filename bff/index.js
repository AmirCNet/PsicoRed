const express = require('express')
const cors = require('cors')
const profesionales = require('./data/profesionales')

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

// GET — obtener todos los profesionales
app.get('/api/profesionales', (req, res) => {
  res.json(profesionales)
})

// POST — agregar un profesional nuevo
app.post('/api/profesionales', (req, res) => {
  const nuevoId = profesionales.length > 0
    ? Math.max(...profesionales.map(p => p.id)) + 1
    : 1
  const nuevo = { ...req.body, id: nuevoId }
  profesionales.push(nuevo)
  res.status(201).json(nuevo)
})

// PUT — editar un profesional existente
app.put('/api/profesionales/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const index = profesionales.findIndex(p => p.id === id)
  if (index === -1) return res.status(404).json({ error: 'No encontrado' })
  profesionales[index] = { ...profesionales[index], ...req.body }
  res.json(profesionales[index])
})

// DELETE — eliminar un profesional
app.delete('/api/profesionales/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const index = profesionales.findIndex(p => p.id === id)
  if (index === -1) return res.status(404).json({ error: 'No encontrado' })
  profesionales.splice(index, 1)
  res.status(204).send()
})

app.listen(PORT, () => {
  console.log(`BFF corriendo en http://localhost:${PORT}`)
})