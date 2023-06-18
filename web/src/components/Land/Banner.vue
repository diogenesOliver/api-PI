<template>
  <section class="banner">
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/carousel/carousel-gym-1-md.jpg" alt="" />
          <div class="carousel-caption d-none d-md-block">
            <h5>Hipertrofia</h5>
            <p>
              Método de treinamento exclusivo, baseado na sua progressão individual. 
            </p>
            <router-link to="/register">
              <button class="slider-button">Inscreva-se</button>
            </router-link>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="@/assets/carousel/carousel-gym-test3 - Copia.jpg"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Adaptação</h5>
            <p>
              Prepare seu corpo para novos desafios e ultrapasse qualquer lesão.
            </p>
            <router-link to="/register">
              <button class="slider-button">Inscreva-se</button>
            </router-link>
          </div>
        </div>
        <div class="carousel-item">
          <img src="@/assets/carousel/carousel-food-3-p.jpg" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Alimentação</h5>
            <p>
              Tenha uma alimentação mais saudável e rica em nutrientes para alcançar seus objetivos.
            </p>
            <router-link to="/register">
              <button class="slider-button">Inscreva-se</button>
            </router-link>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style scoped>
.banner {
  height: 70vh !important;
}

.carousel-item img {
  opacity: 0.8;
}

.carousel {
  height: 100% !important;
}

.carousel-inner {
  height: 100% !important;
}
.carousel-item {
  height: 100%;
}
.carousel img {
  height: 100% !important;
  width: 100%;
}

h5 {
  font-size: clamp(1rem, 2rem, 2.5rem);
  font-weight: 700;
}

p {
  font-size: clamp(1rem, 1.1rem, 1.2rem);
  font-weight: 500;
}

.slider-button {
  padding: 1rem;
  width: 20%;
  border: none;
  border-radius: 5px;
  background: #151515;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  transition: .2s;
}

.slider-button:hover {
  background: #a5a4a4;
  color: black;
}
</style>
