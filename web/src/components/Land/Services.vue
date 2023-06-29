<template>
  <section>
    <h2>Serviços</h2>
    <div class="services">
      <div class="services-box">
        <img src="@/assets/imgs/5.jpg" alt="" />
        <h3>Hipertrofia</h3>
        <p>
          Ganhe mais força e tenha músculos mais resistentes através de
          treinamentos focados em hipertrofia. Com as mais modernas e melhores
          técnicas de treinamento, nossa equipe estará pronta para ajudar você a
          atingir o seu resultado desejado.
          A hipertrofia refere-se ao aumento do tamanho e da força dos músculos do corpo através do treinamento de resistência. Se você está interessado em desenvolver massa muscular e alcançar a hipertrofia, nosso site pode te ajudar.
        </p>
        <button>
          <a href="#">Inscreva-se</a>
        </button>
      </div>
      <div class="services-box">
        <img src="@/assets/imgs/lose-w.jpg" alt="" />
        <h3>Emagrecimento</h3>
        <p>
          Para alcançar seus resultados, além de treinamento, você precisará de
          uma boa alimentação para trazer ao seu corpo os nutrientes necessários
          para recuperação múscular. Nossa equipe adaptará uma dieta conforme
          suas necessidades.
          Uma alimentação equilibrada e saudável desempenha um papel fundamental no emagrecimento. É recomendado consumir alimentos ricos em nutrientes, como frutas, vegetais, proteínas magras, grãos integrais e gorduras saudáveis.
        </p>
        <button>
          <a href="#">Inscreva-se</a>
        </button>
      </div>
      <div class="services-box">
        <img src="@/assets/imgs/1.jpg" alt="" />
        <h3>Adaptação</h3>
        <p>
          Sabemos que lesões e dores podem vir a ser um impeditivo para treinar.
          Com isso, temos profissionais capaz de adaptar treinamentos conforme
          suas dores e desconfortos, junto com suas lesões, independente do grau
          em que ela estiver.
          Com o treinamento regular, ocorre um aumento da força muscular. Isso ocorre não apenas devido ao aumento da massa muscular, mas também à melhora da coordenação neuromuscular, recrutamento mais eficiente das fibras musculares e adaptações no sistema nervoso.
        </p>
        <button>
          <a href="#">Inscreva-se</a>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Services",
};
</script>

<style scoped>
section {
  width: 80%;
  margin: 2rem auto;
}

h2 {
  font-size: 2.5rem;
}

.services {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.services-box {
  padding: 1.5rem;
}

h3 {
  border-bottom: 2px solid #fff;
  padding-bottom: 1rem;
}

p {
  text-align: justify;
  margin: 2rem 0;
}

button {
  padding: 1rem;
  background: #fff;
  transition: 400ms;
  border: none;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
}

a {
  color: rgba(0, 0, 0, 0.8);
  font-weight: 700;
  text-decoration: none;
}

button:hover {
  background: #9c9a9a;
}

img {
  height: 20rem;
  width: 100%;
  border: none;
  border-radius: 5px;
  margin: 2rem 0;
}

@media screen and (max-width: 600px) {
  .services {
    display: block;
  }

  a {
    width: 100%;
    padding: 1rem;
  }
}

@media screen and (min-width: 601px) and (max-width: 930px) {
  .services {
    display: block;
  }

  a {
    width: 100%;
    padding: 1rem;
  }
}

@media screen and (min-width: 931px) and (max-width: 1366px) {
  .services {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .services-box {
    padding: 0;
    min-height: 100%;
  }
}
</style>
