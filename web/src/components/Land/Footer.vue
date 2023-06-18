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
      <input type="email" name="email" placeholder="Digite o seu e-mail" />
      <button>Enviar</button>
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
  gap: 15%;
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

.news {
  min-width: 500px;
}

input {
  padding: 1rem;
  width: 65%;
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
</style>
