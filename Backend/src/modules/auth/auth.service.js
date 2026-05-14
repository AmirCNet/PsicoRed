const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const supabase = require('../../db/supabaseClient')

// Loguea al usuario por email y password, retorna {token, usuario}
const login = async (email, password) => {
  const { data: usuario, error } = await supabase
    .from('usuarios')
    .select('*')
    .eq('email', email)
    .eq('activo', true)
    .single()

  if (error || !usuario) {
    throw new Error('Credenciales incorrectas')
  }

  const passwordValido = await bcrypt.compare(password, usuario.password_hash)
  if (!passwordValido) {
    throw new Error('Credenciales incorrectas')
  }

  const token = jwt.sign(
    { id: usuario.id, email: usuario.email, rol: usuario.rol },
    process.env.JWT_SECRET,
    { expiresIn: '8h' }
  )

  return {
    token,
    usuario: {
      id: usuario.id,
      email: usuario.email,
      rol: usuario.rol
    }
  }
}

// Retorna el perfil del usuario autenticado.
const getMe = async (userId) => {
  const { data, error } = await supabase
    .from('usuarios')
    .select('id, email, rol, activo, creado_en, actualizado_en')
    .eq('id', userId)
    .single()

  if (error || !data) throw new Error('Usuario no encontrado')
  return data
}

module.exports = { login, getMe }
