const API = 'http://localhost:3000/api'

export const getProfesionales = async () => {
  const res = await fetch(`${API}/profesionales`)
  return res.json()
}

export const addProfesional = async (profesional) => {
  const res = await fetch(`${API}/profesionales`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(profesional)
  })
  return res.json()
}

export const updateProfesional = async (id, cambios) => {
  const res = await fetch(`${API}/profesionales/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cambios)
  })
  return res.json()
}

export const deleteProfesional = async (id) => {
  await fetch(`${API}/profesionales/${id}`, {
    method: 'DELETE'
  })
}