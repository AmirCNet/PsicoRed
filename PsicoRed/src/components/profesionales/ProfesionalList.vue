<script setup>
defineProps(['profesionales'])
</script>

<template>
  <div>
    <h2>Listado</h2>

    <ul>
      <li v-for="p in profesionales" :key="p.id">
        {{ p.nombre }} - {{ p.especialidad }}
      </li>
    </ul>
  </div>
</template>