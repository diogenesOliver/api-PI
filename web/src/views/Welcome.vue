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
  </section>
</template>

<script>
export default {
  name: "Welcome",
};
</script>

<style scoped>
section {
  height: 100vh;
  background: #fff;
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
</style>
