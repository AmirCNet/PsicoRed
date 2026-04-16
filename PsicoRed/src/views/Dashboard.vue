<template>
  <div class="dashboard">
    <h1>¡Bienvenida!</h1>
    <p>Ingresaste correctamente al sistema.</p>
  </div>
</template>

<style scoped>
.dashboard {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background: var(--cream);
  text-align: center;
}

.dashboard h1 {
  font-size: 2rem;
  color: var(--wine);
}

.dashboard p {
  color: var(--text-soft);
}
</style>
