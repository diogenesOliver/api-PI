<template>
  <section>
    <h2>Serviços</h2>
    <div class="services">
      <div class="services-box">
        <img
          src="@/assets/imgs/5.jpg"
          alt=""
        />
        <h3>Hipertrofia</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam,
          error impedit sit alias, illum nobis tenetur quisquam fugit unde
          cupiditate, assumenda consequuntur. Nobis quis facilis dignissimos est
          numquam, distinctio alias.
        </p>
        <button>
          <a href="#">Inscreva-se</a>
        </button>
      </div>
      <div class="services-box">
        <img src="@/assets/imgs/lose-w.jpg" alt="" />
        <h3>Emagrecimento</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
          expedita id, sapiente molestias eaque voluptatem libero accusamus
          voluptatum harum dolor maxime incidunt architecto quis cupiditate
          fugiat provident iusto nisi iste!
        </p>
        <button>
          <a href="#">Inscreva-se</a>
        </button>
      </div>
      <div class="services-box">
        <img
          src="@/assets/imgs/1.jpg"
          alt=""
        />
        <h3>Adaptação</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
          minus facere consequuntur laboriosam voluptatum, quo animi nulla
          debitis sed porro qui ea molestias quia temporibus autem tempora dolor
          voluptates! Minus?
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
  height: 100%;
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
