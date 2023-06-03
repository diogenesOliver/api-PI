<template>
  <section class="header-wrapper">
    <div class="goals-section">
      <div class="goal-box">
        <div class="goals-box">
          <div class="goal-title">
            <img
              src="https://cdn-icons-png.flaticon.com/512/75/75929.png"
              alt=""
            />
            <h2>Treinamentos</h2>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
            suscipit autem magnam, dolore sequi cum vitae nesciunt possimus non
            temporibus dolorum animi voluptatem aliquam pariatur harum laborum,
            incidunt voluptate assumenda? Perferendis mollitia dignissimos at
            illo impedit dolore, ullam aliquid ut omnis id quibusdam iure odit
            excepturi nesciunt enim perspiciatis earum.
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
            suscipit autem magnam, dolore sequi cum vitae nesciunt possimus non
            temporibus dolorum animi voluptatem aliquam pariatur harum laborum,
            incidunt voluptate assumenda? Perferendis mollitia dignissimos at
            illo impedit dolore, ullam aliquid ut omnis id quibusdam iure odit
            excepturi nesciunt enim perspiciatis earum.
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
            suscipit autem magnam, dolore sequi cum vitae nesciunt possimus non
            temporibus dolorum animi voluptatem aliquam pariatur harum laborum,
            incidunt voluptate assumenda? Perferendis mollitia dignissimos at
            illo impedit dolore, ullam aliquid ut omnis id quibusdam iure odit
            excepturi nesciunt enim perspiciatis earum.
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
            suscipit autem magnam, dolore sequi cum vitae nesciunt possimus non
            temporibus dolorum animi voluptatem aliquam pariatur harum laborum,
            incidunt voluptate assumenda? Perferendis mollitia dignissimos at
            illo impedit dolore, ullam aliquid ut omnis id quibusdam iure odit
            excepturi nesciunt enim perspiciatis earum.
          </p>
        </div>
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
.goals-section {
  display: flex;
  width: 80%;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  margin: 2rem auto;
}

.goal-box {
  display: flex;
  flex-direction: column;
  gap: 5rem;
}

.goal-title {
  display: flex;
  align-items: center;
  gap: 3rem;
}

h2 {
  letter-spacing: 1px;
  font-family: var(--font-montserrat);
  margin-top: 0.3rem;
}

p {
  text-align: justify;
  max-width: 450px;
  margin-top: 1rem;
  letter-spacing: 1px;
  font-family: var(--font-poppins);
}

img {
  width: 3rem;
}
</style>