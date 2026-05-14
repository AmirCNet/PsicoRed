const bcrypt = require('bcryptjs')
const supabase = require('../../db/supabaseClient')

const getAll = async () => {
  const { data, error } = await supabase
    .from('usuarios')
    .select('id, email, rol, activo, creado_en, actualizado_en')
    .order('creado_en', { ascending: false })
  if (error) throw error
  return data
}

const getById = async (id) => {
  const { data, error } = await supabase
    .from('usuarios')
    .select('id, email, rol, activo, creado_en, actualizado_en')
    .eq('id', id)
    .single()
  if (error || !data) throw new Error('Usuario no encontrado')
  return data
}

const create = async ({ email, password, rol }) => {
  const password_hash = await bcrypt.hash(password, 10)
  const { data, error } = await supabase
    .from('usuarios')
    .insert({ email, password_hash, rol })
    .select('id, email, rol, activo, creado_en')
    .single()
  if (error) throw error
  return data
}

const update = async (id, cambios) => {
  const updateData = { ...cambios }
  if (cambios.password) {
    updateData.password_hash = await bcrypt.hash(cambios.password, 10)
    delete updateData.password
  }
  const { data, error } = await supabase
    .from('usuarios')
    .update(updateData)
    .eq('id', id)
    .select('id, email, rol, activo')
    .single()
  if (error) throw error
  return data
}

// Soft delete: desactiva en lugar de borrar (preserva integridad referencial)
const remove = async (id) => {
  const { data, error } = await supabase
    .from('usuarios')
    .update({ activo: false })
    .eq('id', id)
    .select('id, activo')
    .single()
  if (error) throw error
  return data
}

module.exports = { getAll, getById, create, update, remove }
