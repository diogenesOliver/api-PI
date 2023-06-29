<template>
  <section>
    <div class="about-box reveal">
      <h2>Sobre</h2>
      <p>
        Bem-vindo ao "MyFit" - seu destino online para alcançar um estilo de vida saudável e ativo! No MyFit, acreditamos que a boa forma física é essencial para uma vida equilibrada, e nosso site foi projetado para ajudar você a atingir seus objetivos de saúde e condicionamento físico.

        Não importa se você é um novato no mundo fitness ou um atleta experiente, o MyFit está aqui para ajudar você a atingir seus objetivos de maneira eficaz e sustentável.

        Por favor, tenha em mente que esse é um site fictício e não está realmente disponível online. Esta descrição foi criada apenas para fins ilustrativos.
      </p>
    </div>
    <div class="image-box">
      <img src="@/assets/carousel/carousel-gym-test.jpg" alt="Banner" />
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
  align-items: center;
  justify-content: center;
  margin: 5rem auto;
  width: 80%;
  height: 70vh;
}

.about-box {
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #fff;
  border: none;
  border-radius: 5px;
  height: 100%;
  width: 90%;
  padding: 0 4rem;
}

h2 {
  font-size: clamp(2rem, 5vw, 3rem);
  color: var(--main-dark);
}

p {
  margin-top: 1rem;
  max-width: 90%;
  line-height: 1.5rem;
  letter-spacing: 1px;
  text-align: justify;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
}

.image-box {
  top: 2rem;
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

@media screen and (max-width: 600px) {
  section {
    height: 60dvh !important;
    margin: 2rem auto;
    width: 100%;
  }

  .about-box {
    width: 80%;
    padding: 0;
    border-radius: 0;
    background: hsla(210, 17%, 9%);
  }

  .image-box {
    display: none;
  }

  h2 {
    color: #fff !important;
  }

  p {
    font-weight: 300;
    max-width: 100%;
    color: #fff !important;
  }
}

@media screen and (min-width: 601px) and (max-width: 930px) {
  section {
    height: 55dvh !important;
    margin: 0 auto;
    width: 100%;
  }

  .about-box {
    width: 80%;
    padding: 0;
    border-radius: 0;
    background: hsla(210, 17%, 9%);
  }

  .image-box {
    height: 100% !important;
    display: none;
  }

  img {
    height: 100% !important;
  }

  h2 {
    color: #fff !important;
  }

  p {
    font-weight: 300;
    max-width: 100%;
    color: #fff !important;
  }
}

@media screen and (min-width: 931px) and (max-width: 1366px) {
  section {
    height: 70dvh !important;
    margin: 2rem auto;
    width: 100%;
  }

  .about-box {
    width: 45%;
    padding: 1rem 3rem;
  }

  .image-box {
    top: 2rem;
    position: relative;
    width: 35%;
    right: 2rem;
  }

  img {
    border: none;
    border-radius: 5px;
    box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.4);
    width: 100%;
  }

  p {
    max-width: 100%;
  }
}
</style>
