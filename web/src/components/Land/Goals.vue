<template>
  <section>
    <div class="goal-box">
      <div class="goals-box">
        <div class="goal-title">
          <img src="@/assets/icons/treino.png" alt="" />
          <h2>Treinamentos</h2>
        </div>
        <p>
          Ganhe mais força e tenha músculos mais resistentes através de
          treinamentos focados em hipertrofia. Com as mais modernas e melhores
          técnicas de treinamento, nossa equipe estará pronta para ajudar você a
          atingir o seu resultado desejado.
        </p>
      </div>
      <div class="goals-box">
        <div class="goal-title">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5769/5769682.png"
            alt=""
          />
          <h2>Alimentação</h2>
        </div>
        <p>
          Para alcançar seus resultados, além de treinamento, você precisará de
          uma boa alimentação para trazer ao seu corpo os nutrientes necessários
          para recuperação múscular. Nossa equipe adaptará uma dieta conforme
          suas necessidades.
        </p>
      </div>
    </div>
    <div class="goal-box">
      <div class="goals-box">
        <div class="goal-title">
          <img
            src="https://cdn-icons-png.flaticon.com/512/185/185606.png"
            alt=""
          />
          <h2>Perda de Peso</h2>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad suscipit
          autem magnam, dolore sequi cum vitae nesciunt possimus non temporibus
          dolorum animi voluptatem aliquam pariatur harum laborum, incidunt.
        </p>
      </div>
      <div class="goals-box">
        <div class="goal-title">
          <img
            src="https://cdn-icons-png.flaticon.com/512/10/10699.png"
            alt=""
          />
          <h2>Adaptação</h2>
        </div>
        <p>
          Sabemos que lesões e dores podem vir a ser um impeditivo para treinar.
          Com isso, temos profissionais capaz de adaptar treinamentos conforme
          suas dores e desconfortos, junto com suas lesões, independente do grau
          em que ela estiver.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Objetivos",
};
</script>

<style scoped>
section {
  display: flex;
  justify-content: space-around;
  width: 100%;
  background: #fff;
  color: black;
}

.goal-box {
  display: flex;
  flex-direction: column;
  width: 30%;
  gap: 2rem;
  margin: 2rem auto;
}

.goal-title {
  display: flex;
  align-items: center;
  gap: 1rem;
}

h2 {
  font-family: var(--font-montserrat);
  margin-top: 0.7rem;
}

p {
  max-width: 650px;
  margin-top: 1rem;
  text-align: justify;
}

img {
  width: 3rem;
}

@media screen and (max-width: 600px) {
  section {
    display: block;
    margin: 0 auto;
  }

  .goal-box {
    padding: 1.5rem 0;
    width: 80%;
  }

  p {
    max-width: 100% !important;
  }
}

@media screen and (min-width: 601px) and (max-width: 930px) {
  section {
    display: block;
    margin: 0 auto;
  }

  .goal-box {
    padding: 1.5rem 0;
    width: 80%;
  }

  p {
    max-width: 100% !important;
  }
}
</style>
