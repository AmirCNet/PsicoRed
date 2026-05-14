<template>
  <div class="dashboard">
    <div class="dashboard-card">
      <div class="avatar">
        {{ iniciales }}
      </div>
      <h1>¡Bienvenido/a!</h1>
      <p class="email">{{ authStore.usuario?.email }}</p>
      <span class="badge" :class="authStore.esAdmin ? 'badge-admin' : 'badge-pro'">
        {{ authStore.esAdmin ? 'Administrador' : 'Profesional' }}
      </span>
      <p class="msg">Ingresaste correctamente al sistema.</p>
      <button class="btn-logout" @click="cerrarSesion">
        Cerrar sesión
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/authStore'

const router    = useRouter()
const authStore = useAuthStore()

const iniciales = computed(() => {
  const email = authStore.usuario?.email ?? ''
  return email.slice(0, 2).toUpperCase()
})

const cerrarSesion = () => {
  authStore.logout()
  router.push('/login')
}
</script>

<style scoped>
.dashboard {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--cream);
}

.dashboard-card {
  background: var(--white);
  border-radius: 16px;
  padding: 2.5rem 3rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  min-width: 300px;
}

.avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: var(--wine);
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
}

h1 {
  font-size: 1.6rem;
  color: var(--wine);
  margin: 0;
}

.email {
  color: var(--text-soft);
  font-size: 0.9rem;
  margin: 0;
}

.msg {
  color: var(--text-soft);
  font-size: 0.85rem;
  margin: 0.25rem 0;
}

.badge {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 99px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.badge-admin {
  background: #fce8e8;
  color: #b91c1c;
}

.badge-pro {
  background: #e8f0fc;
  color: #1c4bb9;
}

.btn-logout {
  margin-top: 1rem;
  padding: 0.65rem 1.5rem;
  background: transparent;
  color: var(--wine);
  border: 1.5px solid var(--wine);
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-logout:hover {
  background: var(--wine);
  color: white;
}
</style>