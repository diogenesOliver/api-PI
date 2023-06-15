<template>
  <section>
    <div class="about-box reveal">
      <h2>Sobre</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum error,
        consequuntur cumque illo laboriosam nam fuga eligendi, fugit aliquid
        voluptatibus sequi non excepturi dicta aliquam aut. Sequi quibusdam
        adipisci ullam iusto laudantium eveniet voluptatibus eaque doloribus
        delectus hic quaerat nesciunt possimus, neque aspernatur obcaecati
        voluptates deleniti vel repudiandae consectetur laborum quasi culpa
        temporibus sint? Animi vitae ab iure eligendi ipsam et nam dolores!
        Sunt, unde facilis a facere minus sit, pariatur saepe beatae nesciunt
        fugiat itaque voluptates eos asperiores veritatis dolorem dicta. Nihil
        id possimus nostrum est repudiandae a animi repellendus excepturi iste
        atque similique aut, doloremque perferendis? Harum temporibus sapiente
        facere enim obcaecati rem fugiat sunt tempora, repellat officiis
        cupiditate sed? Dolorum eum distinctio inventore labore quaerat aliquid
        autem, sint quod vero. Nihil debitis corrupti architecto aliquid, amet
        saepe! Quisquam tempora, inventore perspiciatis sit minus corporis rerum
        porro sunt eos molestiae quaerat. Itaque enim ratione accusamus illum
        quis voluptatem.
      </p>
    </div>
    <div class="image-box reveal">
      <img
        src="@/assets/carousel/carousel-gym-test.jpg"
        alt="Banner"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
section {
  display: flex;
  margin: 5rem auto;
  width: 80%;
  height: 70vh;
}

.about-box {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 90%;
  padding: 0 4rem;
  background: #fff;
}

h2 {
  font-size: 3rem;
  color: var(--main-dark);
}

p {
  margin: 2rem 0;
  max-width: 90%;
  text-align: justify;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
}

.image-box {
  top: 4rem;
  position: relative;
  width: 80%;
  right: 5rem;
}

img {
  border: none;
  border-radius: 5px;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.4);
  height: 80%;
  width: 100%;
}
</style>
