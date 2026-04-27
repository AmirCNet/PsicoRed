<template>
  <div>
    <div class="login-header">
      <h1 class="login-title">PsicoRed</h1>
      <p class="login-subtitle">Iniciá sesión para continuar</p>
    </div>

    <form @submit.prevent="handleLogin" class="login-form">
      <div class="form-group">
        <label for="email">Correo electrónico</label>
        <input
          id="email"
          v-model="email"
          type="email"
          placeholder="tu@correo.com"
          autocomplete="email"
        />
      </div>

      <div class="form-group">
        <label for="password">Contraseña</label>
        <input
          id="password"
          v-model="password"
          type="password"
          placeholder="••••••••"
          autocomplete="current-password"
        />
      </div>

      <div v-if="error" class="login-error">
        {{ error }}
      </div>

      <button type="submit" class="login-btn">Ingresar</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Mock de usuarios (temporal, reemplazar con Supabase)
const USUARIOS = [
  { email: 'admin@psicored.com',   password: '1234' },
  { email: 'ana@psicored.com',     password: 'ana123' },
  { email: 'carlos@psicored.com',  password: 'carlos123' },
]

const email    = ref('')
const password = ref('')
const error    = ref('')

const handleLogin = () => {
  error.value = ''

  const usuario = USUARIOS.find(
    u => u.email === email.value && u.password === password.value
  )

  if (usuario) {
    router.push('/dashboard')
  } else {
    error.value = 'Usuario o contraseña incorrectos.'
  }
}
</script>

<style scoped>
.login-header {
  text-align: center;
  margin-bottom: 2rem;
}

.login-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--wine);
  letter-spacing: -0.5px;
}

.login-subtitle {
  font-size: 0.9rem;
  color: var(--text-soft);
  margin-top: 4px;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-group label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--wine);
}

.form-group input {
  padding: 0.65rem 0.9rem;
  border: 1.5px solid var(--border);
  border-radius: 8px;
  font-size: 0.95rem;
  color: var(--text);
  background: var(--cream);
  transition: border-color 0.2s;
  outline: none;
}

.form-group input:focus {
  border-color: var(--rose);
  background: var(--white);
}

.form-group input::placeholder {
  color: #b8a8a0;
}

.login-error {
  background: var(--error-bg);
  color: var(--error);
  font-size: 0.85rem;
  padding: 0.6rem 0.9rem;
  border-radius: 8px;
  border-left: 3px solid var(--error);
}

.login-btn {
  margin-top: 0.4rem;
  padding: 0.75rem;
  background: var(--wine);
  color: var(--white);
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.login-btn:hover {
  background: var(--wine-light);
}
</style>