<script setup>
import { ref, onMounted } from 'vue'
import ProfesionalList from '../components/profesionales/ProfesionalList.vue'
import { getProfesionales } from '../services/profesionalService'

const profesionales = ref([])

onMounted(async () => {
  profesionales.value = await getProfesionales()
})
</script>

<template>
  <div>
    <h1>Gestión de Profesionales</h1>
    <ProfesionalList :profesionales="profesionales" />
  </div>
</template>