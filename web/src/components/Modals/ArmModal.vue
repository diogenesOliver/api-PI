<template>
  <div class="container">
    <div class="title">
      <h1>Treinamento para braços</h1>
    </div>
    <div class="training-box">
      <h3>Biceps</h3>
      <ul>
        <li>Rosca direta | 4 séries de 8-12 repetições</li>
        <li>Rosca martelo | 4 séries de 8-12 repetições</li>
        <li>Rosca direta (sentado) | 3 séries de 8-12 repetições</li>
        <li>Rosca direta na polia | 3 séries de 8-12 repetições</li>
        <li>Rosca unilateral com halteres | 3 séries de 8 - 12 repetições</li>
      </ul>
    </div>
    <div class="training-box">
      <h3>Tríceps</h3>
      <ul>
        <li>Extensão Tríceps com corda | 4 séries de 8-12 repetições</li>
        <li>Extensão de tríceps com barra | 4 séries de 8-12 repetições</li>
        <li>Tríceps Francês | 3 séries de 8-12 repetições</li>
        <li>Tríceps deitado com barra W | 3 séries de 8-12 repetições</li>
        <li>
          Extensão de tríceps com barra e pegada invertida | 3 séries de 8 - 12
          repetições
        </li>
      </ul>
    </div>
    <div class="training-box">
      <h3>Antebraço</h3>
      <ul>
        <li>Rosca de punho | 4 séries de 8-12 repetições</li>
        <li>Rosca de punho invertido | 4 séries de 8-12 repetições</li>
        <li>Suspensão na barra | 3 séries de 8-12 repetições</li>
        <li>Carregamento de halteres | 3 séries de 8-12 repetições</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Lista",
};
</script>

<style scoped>
section {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #151515 !important;
}

.container {
  padding: 1rem;
  border: none;
  border-radius: 5px;
  box-shadow: 2px 5px 15px rgba(0, 0, 0 0.6);
  background: #fff;
}

.title {
  text-align: center;
  margin-bottom: 2.5rem;
}

h2,
h3 {
  color: rgba(0, 0, 0, 0.855);
}

li {
  margin: 0.25rem 0;
}
</style>
