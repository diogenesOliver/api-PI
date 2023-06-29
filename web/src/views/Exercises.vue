<template>
  <section>
    <ArmModal />
    <!-- <header>
      <div class="logo">
        <img src="@/assets/imgs/logo.png" alt="" />
      </div>
      <div class="login">
        <router-link to="/">
          <img
            class="close-icon"
            src="@/assets/icons/close_white_48dp.svg"
            alt=""
          />
        </router-link>
      </div>
    </header>
    <div class="container">
      <div class="title">
        <h2>Treinamentos</h2>
        <p>Qual treinamento você deseja?</p>
      </div>
    </div>
    <div class="training-box">
      <div class="training-card arms">
        <div class="card-title">
          <h2>Braços</h2>
        </div>
      </div>
      <div class="training-card chest">
        <div class="card-title">
          <h2>Peitoral</h2>
        </div>
      </div>
      <div class="training-card back">
        <div class="card-title">
          <h2>Costas</h2>
        </div>
      </div>
      <div class="training-card legs">
        <div class="card-title">
          <h2>Pernas</h2>
        </div>
      </div>
      <div class="training-card shoulders">
        <div class="card-title">
          <h2>Ombros</h2>
        </div>
      </div>
    </div> -->
  </section>
</template>

<script>
import ArmModal from "../components/Modals/ArmModal.vue";
export default {
  name: "Exercises",

  components: {
    ArmModal,
  },
};
</script>

<style scoped>
section {
  height: 100vh;
  background: #fff;
  color: black;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  background: #13171b;
  box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.5);
}

.logo img {
  width: 13rem;
}

.title {
  text-align: center;
  margin-top: 2rem;
}

.training-box {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0 2.15rem;
}

.training-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 45vh;
  width: 100%;
  border: none;
  border-radius: 5px;
  box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.6);
  color: #fff;
  transition: 0.2s;
  cursor: pointer;
}

.arms {
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    url("@/assets/workouts/arm-workout.jpg");
  background-size: cover;
  background-position: center;
}

.chest {
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    url("@/assets/workouts/chest-workout.jpg");
  background-size: cover;
  background-position: center;
}

.back {
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    url("@/assets/workouts/back-workout.jpg");
  background-size: cover;
  background-position: center;
}

.legs {
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    url("@/assets/workouts/leg-workout2.jpg");
  background-size: cover;
  background-position: center;
}

.shoulders {
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    url("@/assets/workouts/shoulder-workout.jpg");
  background-size: cover;
  background-position: center;
}

.arms:hover,
.chest:hover,
.back:hover,
.legs:hover,
.shoulders:hover {
  transform: scale(1.0265);
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.8);
}
</style>
