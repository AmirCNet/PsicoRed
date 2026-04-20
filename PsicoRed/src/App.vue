<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const showNav = computed(() => route.path !== '/login')
</script>

<template>
  <div>
    <nav v-if="showNav" class="nav">
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