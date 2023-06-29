<template>
  <section>
    <div class="goal-box">
      <div class="goals-box">
        <div class="goal-title">
          <img src="@/assets/icons/treino.png" alt="" />
          <h2>Treinamentos</h2>
        </div>
        <p>
<<<<<<< HEAD
          Ganhe mais força e tenha músculos mais resistentes através de
          treinamentos focados em hipertrofia. Com as mais modernas e melhores
          técnicas de treinamento, nossa equipe estará pronta para ajudar você a
          atingir o seu resultado desejado.
=======
          Aprenda e aperfeiçoe sua técnica com nossa extensa biblioteca de exercícios. Aqui, você encontrará descrições detalhadas e vídeos instrutivos para uma variedade de exercícios, desde os básicos até os mais avançados, abrangendo diferentes grupos musculares e modalidades de treino.
>>>>>>> a304dc4a2614959ea4f8d0a3e8ec47e43744258b
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
<<<<<<< HEAD
          Para alcançar seus resultados, além de treinamento, você precisará de
          uma boa alimentação para trazer ao seu corpo os nutrientes necessários
          para recuperação múscular. Nossa equipe adaptará uma dieta conforme
          suas necessidades.
=======
          Nosso site reúne uma equipe de especialistas em fitness, nutrição e bem-estar, que compartilham dicas, conselhos e informações relevantes sobre os últimos avanços na área. Descubra receitas saudáveis, tendências de treinamento e muito mais.
>>>>>>> a304dc4a2614959ea4f8d0a3e8ec47e43744258b
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
<<<<<<< HEAD
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad suscipit
          autem magnam, dolore sequi cum vitae nesciunt possimus non temporibus
          dolorum animi voluptatem aliquam pariatur harum laborum, incidunt.
=======
          A perda de peso eficaz requer uma mentalidade positiva e realista. É importante estabelecer metas alcançáveis, manter a motivação e adotar uma abordagem equilibrada em relação à alimentação e ao exercício. Evitar dietas extremas ou restritivas e focar em mudanças de estilo de vida a longo prazo é geralmente mais sustentável.
>>>>>>> a304dc4a2614959ea4f8d0a3e8ec47e43744258b
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
<<<<<<< HEAD
          Sabemos que lesões e dores podem vir a ser um impeditivo para treinar.
          Com isso, temos profissionais capaz de adaptar treinamentos conforme
          suas dores e desconfortos, junto com suas lesões, independente do grau
          em que ela estiver.
=======
          Nossos treinadores especializados desenvolveram uma série de programas de treinamento abrangentes, adequados para iniciantes e experientes. Esses programas são projetados para ajudar você a melhorar sua força, resistência, flexibilidade e alcançar resultados concretos.
>>>>>>> a304dc4a2614959ea4f8d0a3e8ec47e43744258b
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
