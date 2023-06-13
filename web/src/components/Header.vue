<template>
  <header>
    <div class="logo">
      <img src="@/assets/imgs/logo.png" alt="" />
    </div>
    <nav>
      <ul>
        <li>Sobre</li>
        <li>Objetivos</li>
        <li>Inscrever-se</li>
        <li>Contato</li>
        <li></li>
      </ul>
    </nav>
    <div class="login">
      <router-link to="/register">
        <button>Cadastre-se</button>
      </router-link>
      <router-link to="/login">
        <button>Login</button>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
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

li {
  font-family: var(--font-montserrat);
  padding: 0.8rem;
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 400ms;
}

li:hover {
  background: #c9d6d4;
  color: rgba(0, 0, 0, 0.7);
}

.login {
  display: flex;
  gap: 2rem;
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

img {
  width: 13rem;
}
</style>
