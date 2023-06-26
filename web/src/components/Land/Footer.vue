<template>
  <footer>
    <div class="contact">
      <h3>Contato</h3>
      <p><strong>My FIT</strong></p>
      <p>Av. Venâncio Aires, 93 - Cidade Baixa.</p>
      <p>Porto Alegre - Rio Grande do Sul</p>
    </div>
    <div class="email-box">
      <p>(51) 9.8594-3948</p>
      <p>(51) 3288-7750</p>
      <p>
        <a href="mailto:pdgtech@senacrs.com.br">Enviar e-mail</a>
      </p>
    </div>
    <div class="news">
      <h4>Receba novidades por e-mail</h4>
      <div class="box">
        <input type="email" name="email" placeholder="Digite o seu e-mail" />
        <div class="button-box">
          <button>Enviar</button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18%;
  padding: 1.5rem;
  background: #fff;
}

h4,
h3,
p {
  color: var(--primary-dark-low);
}

h4 {
  margin-bottom: 1.3rem;
}

p {
  font-size: 1rem;
  margin: 0.25rem 0;
  transition: 200ms;
}

a {
  color: rgba(0, 0, 0, 0.8);
  font-weight: 700;
}

.email-box {
  margin-top: 1.5rem;
}

.box {
  display: flex;
  align-items: center;
}

input {
  padding: 1rem;
  width: 100%;
  outline: none;
  border: 2px solid black;
  transition: 200ms;
}

button {
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 5px;
  background: var(--primary-dark-low);
  color: #fff;
  font-family: var(--font-poppins);
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  margin-left: 2rem;
  transition: 400ms;
}

button:hover {
  background: #3b4147;
}

@media screen and (max-width: 600px) {
  footer {
    display: block;
  }

  h4 {
    font-size: 1.35rem;
    margin: 1.25rem 0;
  }

  .box {
    display: block;
  }

  input {
    padding: 0.5rem;
    width: 100%;
  }

  button {
    padding: 0.5rem 1.5rem;
    margin: 1rem 0 0 0;
    width: 100%;
  }
}

@media screen and (min-width: 601px) and (max-width: 930px) {
  footer {
    display: block;
  }

  h4 {
    font-size: 1.35rem;
    margin: 1.25rem 0;
  }

  input {
    padding: 0.5rem;
    width: 65%;
  }

  .box {
    gap: 1rem;
  }
  .button-box {
    width: 35%;
  }

  button {
    padding: 0.5rem 1.5rem;
    margin: 0;
    width: 100%;
  }
}

@media screen and (min-width: 931px) and (max-width: 1366px) {
  footer {
    justify-content: space-between;
    gap: 5%;
    padding: 1rem 2rem;
  }

  p {
    font-size: 1rem;
    margin: 0.25rem 0;
    transition: 200ms;
  }

  .email-box {
    margin: 1.5rem 0;
  }

  .box {
    display: flex;
    align-items: center;
  }
}
</style>
