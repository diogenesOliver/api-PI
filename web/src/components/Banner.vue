<template>
  <section class="banner">
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/carousel/carousel-gym-1-p.jpg" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Lorem Ipsum</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero explicabo quam debitis vitae quisquam nihil!</p>
            <button>TESTE</button>
          </div>
        </div>
        <div class="carousel-item">
          <img src="@/assets/carousel/carousel-gym-2-p.jpg" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Lorem Ipsum</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero explicabo quam debitis vitae quisquam nihil!</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="@/assets/carousel/carousel-food-3-p.jpg" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Lorem Ipsum</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero explicabo quam debitis vitae quisquam nihil!</p>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
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

.carousel{
  height: 100% !important;
}

.carousel-inner{
  height: 100% !important;
}
.carousel-item{
  height: 100%;
}
.carousel img {
  height: 100% !important;
  width: 100%;
}
</style>