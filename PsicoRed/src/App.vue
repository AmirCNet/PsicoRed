<script setup>
import { ref, onMounted } from 'vue'

const isLogged = ref(false)

onMounted(() => {
  isLogged.value = !!localStorage.getItem('user')
})
</script>

<template>
  <div>
    <nav v-if="isLogged" class="nav">
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/profesionales">Profesionales</router-link>
    </nav>

    <router-view />
  </div>
</template>

<style scoped>
.nav {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: #f3f3f3;
}

.nav a {
  text-decoration: none;
  font-weight: 600;
  color: #333;
}

.nav a.router-link-active {
  color: #8b1e3f;
}
</style>