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
      </ul>
    </nav>
    <div class="login">
      <router-link to="/register" class="login-buttons">
        <ul>
          <li>Cadastre-se</li>
        </ul>
      </router-link>
      <router-link to="/login" class="login-buttons">
        <ul>
          <li>Login</li>
        </ul>
      </router-link>
    </div>
    <div class="bars-menu">
      <button>
        <img src="@/assets/media/icons8-menu-30.png" alt="" />
      </button>
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

.login-buttons {
  text-decoration: none;
}

ul {
  display: flex;
  text-decoration: none;
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
  text-decoration: none;
  transition: 400ms;
}

li:hover {
  background: #c9d6d4;
  color: rgba(0, 0, 0, 0.7);
}

.bars-menu {
  display: none;
}

.bars-menu img {
  width: 1.5rem;
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

.logo img {
  width: 13rem;
}

@media screen and (max-width: 600px) {
  header {
    padding: 1rem;
  }

  ul,
  .login {
    display: none;
  }

  .logo img {
    width: 10rem;
  }

  .bars-menu {
    display: block;
  }

  .bars-menu img {
    width: 2rem;
  }
}

@media screen and (min-width: 601px) and (max-width: 768px) {
  header {
    justify-content: space-around;
    padding: 1rem 0;
  }

  ul {
    display: none;
  }

  .logo img {
    width: 10rem;
  }

  .login {
    display: flex;
    gap: 0;
  }

  .bars-menu {
    display: block;
  }

  .bars-menu img {
    width: 2rem;
  }
}

@media screen and (min-width: 769px) and (max-width: 930px) {
  header {
    padding: 1rem;
    justify-content: space-around;
  }

  .logo img {
    width: 10rem;
  }

  ul {
    display: flex;
    gap: 0rem;
  }

  li {
    padding: 0.6rem;
  }

  .login {
    display: none;
  }

  .bars-menu {
    display: block;
    margin-bottom: 1rem;
  }
}

@media screen and (min-width: 931px) and (max-width: 1024px) {
  header {
    padding: 1rem;
    justify-content: space-around;
  }

  .logo img {
    width: 10rem;
  }

  ul {
    display: flex;
    gap: 0rem;
  }

  .login {
    gap: 0;
  }
}
</style>
