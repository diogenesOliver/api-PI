<template>
  <section>
    <div class="goal-box">
      <div class="goals-box">
        <div class="goal-title">
          <img src="@/assets/icons/treino.png" alt="" />
          <h2>Treinamentos</h2>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad suscipit
          autem magnam, dolore sequi cum vitae nesciunt possimus non temporibus
          dolorum animi voluptatem aliquam pariatur harum laborum, incidunt
          voluptate assumenda? Perferendis mollitia dignissimos at illo impedit
          dolore, ullam aliquid ut omnis id quibusdam iure odit excepturi
          nesciunt enim perspiciatis earum.
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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad suscipit
          autem magnam, dolore sequi cum vitae nesciunt possimus non temporibus
          dolorum animi voluptatem aliquam pariatur harum laborum, incidunt
          voluptate assumenda? Perferendis mollitia dignissimos at illo impedit
          dolore, ullam aliquid ut omnis id quibusdam iure odit excepturi
          nesciunt enim perspiciatis earum.
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
          dolorum animi voluptatem aliquam pariatur harum laborum, incidunt
          voluptate assumenda? Perferendis mollitia dignissimos at illo impedit
          dolore, ullam aliquid ut omnis id quibusdam iure odit excepturi
          nesciunt enim perspiciatis earum.
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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad suscipit
          autem magnam, dolore sequi cum vitae nesciunt possimus non temporibus
          dolorum animi voluptatem aliquam pariatur harum laborum, incidunt
          voluptate assumenda? Perferendis mollitia dignissimos at illo impedit
          dolore, ullam aliquid ut omnis id quibusdam iure odit excepturi
          nesciunt enim perspiciatis earum.
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
  margin: 2rem auto;
  background: #fff;
  color: black;
}

.goal-box {
  display: flex;
  flex-direction: column;
  width: 30%;
  gap: 2rem;
  margin: 2rem 0;
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
</style>
