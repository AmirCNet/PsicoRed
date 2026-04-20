import seedData from '../data/profesionales.json'

const STORAGE_KEY = 'psicored_profesionales'

const cargarDatos = () => {
  const guardado = localStorage.getItem(STORAGE_KEY)
  return guardado ? JSON.parse(guardado) : [...seedData]
}

const guardarDatos = (datos) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(datos))
}

export const getProfesionales = () => {
  return cargarDatos()
}

export const addProfesional = (profesional) => {
  const datos = cargarDatos()
  const nuevoId = datos.length > 0 ? Math.max(...datos.map(p => p.id)) + 1 : 1
  const nuevo = { ...profesional, id: nuevoId }
  datos.push(nuevo)
  guardarDatos(datos)
  return nuevo
}

export const updateProfesional = (id, cambios) => {
  const datos = cargarDatos()
  const index = datos.findIndex(p => p.id === id)
  if (index !== -1) {
    datos[index] = { ...datos[index], ...cambios }
    guardarDatos(datos)
    return datos[index]
  }
  return null
}

export const deleteProfesional = (id) => {
  const datos = cargarDatos()
  const filtrado = datos.filter(p => p.id !== id)
  guardarDatos(filtrado)
}