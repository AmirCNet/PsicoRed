<template>
  <div class="dashboard">
    <h1>¡Bienvenido!</h1>
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

.btn {
  margin-top: 1rem;
  padding: 0.7rem 1.2rem;
  background: var(--wine);
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
}

.btn:hover {
  background: var(--wine-light);
}
</style>