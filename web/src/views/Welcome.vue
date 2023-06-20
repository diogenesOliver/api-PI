<template>
  <section>
    <header>
      <div class="logo">
        <img src="@/assets/imgs/logo.png" alt="" />
      </div>
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Treinamentos</a>
        </li>
        <li>
          <a href="">Dietas</a>
        </li>
        <li>
          <a href="">Calculo IMC</a>
        </li>
      </ul>
    </header>
    <div class="container">
      <div class="d-flex-box">
        <div class="title-box">
          <div class="welcome">
            <h1>Bem-vindo, Fulano!</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Veritatis sint optio voluptatum dolorum expedita temporibus.
            </p>
          </div>
          <div class="box">
            <h2>O que você deseja ver?</h2>
            <p>Selecione algum de nossos serviços.</p>
          </div>
        </div>
        <div class="avatar-card">
          <img
            src="https://avatars.githubusercontent.com/u/22033274?v=4"
            alt=""
          />
          <h3>Fulano de Tal</h3>
          <p>Idade: 24</p>
          <p>Peso: 68kg</p>
        </div>
      </div>
      <div class="cards">
        <div class="workout">
          <h3>Treinamentos</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            odio.
          </p>
        </div>
        <div class="food">
          <h3>Alimentação</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            perspiciatis.
          </p>
        </div>
        <div class="evolution">
          <h3>Evolução</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate,
            in?
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Welcome",
};
</script>

<style scoped>
.d-flex-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.avatar-card {
  padding: 1rem;
  border: none;
  border-radius: 5px;
  box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.4);
}

section {
  height: 100dvh;
  background: #fff;
  color: #000000;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  background: #13171b;
}

ul {
  display: flex;
  gap: 2rem;
}

a {
  font-family: var(--font-montserrat);
  padding: 0.8rem;
  font-size: 1.1rem;
  font-weight: 700;
  text-decoration: none;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 400ms;
}

a:hover {
  background: #c9d6d4;
  color: rgba(0, 0, 0, 0.7);
}

img {
  width: 13rem;
}

.container {
  min-width: 80%;
  padding: 1rem 0;
  margin: 2rem auto;
}

.welcome {
  margin-bottom: 2rem;
}

.cards {
  display: flex;
  gap: 2rem;
  margin: 5rem 0;
}

.workout,
.food,
.evolution {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 45vh;
  width: 100%;
  padding: 0 1rem;
  border: none;
  border-radius: 5px;
  box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.4);
  text-align: justify;
  color: #fff;
  transition: 0.2s;
  cursor: pointer;
}

.workout:hover,
.food:hover,
.evolution:hover {
  transform: scale(1.0265);
}

.workout p,
.food p,
.evolution p {
  max-width: 50%;
  font-weight: 500;
}

.workout {
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    url("https://images.unsplash.com/photo-1606889464198-fcb18894cf50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=790&q=80");
  background-size: cover;
  background-position: center;
}

.food {
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    url("https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80");
  background-size: cover;
  background-position: center;
}

.evolution {
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    url("https://images.unsplash.com/photo-1583500179017-12d75b04e351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80");
  background-size: cover;
  background-position: center;
}
</style>
