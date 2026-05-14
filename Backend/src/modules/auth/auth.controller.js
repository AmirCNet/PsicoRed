const authService = require('./auth.service')

const login = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      return res.status(400).json({ error: 'Email y contraseña son requeridos' })
    }
    const result = await authService.login(email, password)
    res.json(result)
  } catch (err) {
    res.status(401).json({ error: err.message })
  }
}

const me = async (req, res) => {
  try {
    const usuario = await authService.getMe(req.user.id)
    res.json(usuario)
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}

module.exports = { login, me }
