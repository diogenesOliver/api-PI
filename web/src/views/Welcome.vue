<template>
  <section>
    <header>
      <div class="logo">
        <img src="@/assets/imgs/logo.png" alt="" />
      </div>
      <nav>
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
      </nav>
      <div class="bars-menu">
        <button>
          <img src="@/assets/media/icons8-menu-30.png" alt="" />
        </button>
      </div>
    </header>
    <div class="container">
      <div class="d-flex-box">
        <div class="title-box">
          <div class="welcome">
            <h1>Bem-vindo, Fulano!</h1>
            <p>
              Prepare-se para desafios, conquistas e um estilo de vida mais
              saudável!
            </p>
          </div>
        </div>
        <div class="avatar-card">
          <img src="https://avatars.githubusercontent.com/u/22033274?v=4" alt="" />
          <h3>Fulano de Tal</h3>
          <p>Idade: 24</p>
          <p>Peso: 68kg</p>
        </div>
      </div>
      <div class="box">
        <h2>O que você deseja ver?</h2>
        <p>Selecione algum de nossos serviços.</p>
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
import axios from 'axios';

export default {
  name: "Welcome",

  mounted() {
    try {
      axios.get('http://localhost:3000/users').then(res => {
        console.log(res.data)
      })
    } catch (err) { console.log(err) }
  }
};
</script>

<style scoped>
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

.logo img {
  width: 8rem;
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

.bars-menu {
  display: none;
}

.container {
  min-width: 80%;
  padding: 1rem 0;
}

.d-flex-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.avatar-card {
  padding: 1rem;
  border: none;
  border-radius: 5px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.4);
  background: #13171b;
  color: #fff;
}

.avatar-card img {
  display: flex;
  margin: 0 auto;
  width: 50%;
  margin-bottom: 1rem;
  border: none;
  border-radius: 50%;
}

.avatar-card h3 {
  text-align: center;
}

.cards {
  display: flex;
  gap: 2rem;
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
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.8);
}

.workout p,
.food p,
.evolution p {
  max-width: 50%;
  font-weight: 500;
}

.workout {
  background-image: linear-gradient(to right,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)),
    url("https://images.unsplash.com/photo-1606889464198-fcb18894cf50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=790&q=80");
  background-size: cover;
  background-position: center;
}

.food {
  background-image: linear-gradient(to right,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)),
    url("https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80");
  background-size: cover;
  background-position: center;
}

.evolution {
  background-image: linear-gradient(to right,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)),
    url("https://images.unsplash.com/photo-1583500179017-12d75b04e351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80");
  background-size: cover;
  background-position: center;
}

button {
  font-family: var(--font-montserrat);
  padding: 1rem;
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
  background: transparent;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 400ms;
}

button:hover {
  background: #33383d;
}

@media screen and (max-width: 600px) {
  section {
    height: 100dvh;
    background: #fff;
    color: #000000;
  }

  header {
    padding: 1rem;
  }

  nav {
    display: none;
  }

  header img {
    width: 8rem;
  }

  .d-flex-box {
    display: block;
    width: 80%;
    margin: 0 auto;
  }

  h2 {
    margin-top: 1rem;
    padding: 0 1rem;
    text-align: center;
  }

  .box p {
    text-align: center;
  }

  .cards {
    display: block;
    background: #fff;
    width: 100%;
  }

  .workout,
  .food,
  .evolution {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 45vh;
    width: 80%;
    padding: 0 1rem;
    margin: 1.5rem auto;
    border: none;
    border-radius: 5px;
    box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.4);
    text-align: justify;
    color: #fff;
    transition: 0.2s;
    cursor: pointer;
  }

  .evolution {
    margin-bottom: 0;
  }

  .workout p,
  .food p,
  .evolution p {
    max-width: 80%;
    font-weight: 500;
  }
}
</style>
