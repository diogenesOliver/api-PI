<template>
  <section>
    <router-link to="/">
      <img
        class="close-icon"
        src="@/assets/icons/close_white_48dp.svg"
        alt=""
      />
    </router-link>
    <div class="img-box">
      <img src="@/assets/imgs/woman-background.jpg" alt="" />
    </div>
    <div class="register-box">
      <div class="title">
        <h2>Cadastre-se</h2>
        <p>
          Seja parte da nossa comunidade fitness! Cadastre-se agora e comece a sua jornada para uma vida mais saudável e ativa.
        </p>
      </div>
      <form name="contact" class="contact-inform form">
        <div class="form-control">
          <input
            type="text"
            name="name"
            class="form-input"
            placeholder="none"
            required
          />
          <label for="name" class="form-label">Nome</label>
        </div>
        <div class="input-columns">
          <div class="form-control">
            <input
              type="email"
              name="email"
              class="form-input"
              placeholder="none"
              required
            />
            <label for="email" class="form-label">Email</label>
          </div>
          <div class="form-control">
            <input
              type="email"
              name="email"
              class="form-input"
              placeholder="none"
              required
            />
            <label for="email" class="form-label">Confirmar E-mail</label>
          </div>
        </div>
        <div class="input-columns">
          <div class="form-control">
            <input
              type="password"
              name="password"
              class="form-input"
              placeholder="none"
              required
            />
            <label for="password" class="form-label">Senha</label>
          </div>
          <div class="form-control">
            <input
              type="password"
              name="password"
              class="form-input"
              placeholder="none"
              required
            />
            <label for="password" class="form-label">Confirmar Senha</label>
          </div>
        </div>
        <div class="submit-button">
          <div class="buttons-box">
            <input type="submit" value="Cadastrar" />
          </div>
          <p>Ou</p>
          <div class="buttons-box">
            <button>
              <img
                src="https://www.vectorlogo.zone/logos/google/google-icon.svg"
                alt=""
              />
              Entre com o Google
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "Register",
};
</script>

<style scoped>
section {
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;
}

.close-icon {
  position: absolute;
  right: 2rem;
  top: 2rem;
}

.img-box {
  width: 40%;
  height: 100%;
  border: none;
  border-radius: 5px;
}

.img-box img {
  width: 100%;
  height: 100%;
}

.register-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
}

.title {
  width: 50%;
}

h2 {
  font-size: 3rem;
}

p {
  letter-spacing: 1px;
}

.contact-inform {
  width: 50%;
  min-height: 45%;
  padding: 4rem 2rem 2rem;
  border-radius: 0.25rem;
  color: black;
  background: #fff;
}

.input-columns {
  display: flex;
  gap: 1rem;
  margin: 0.8rem 0;
}

.form-control {
  position: relative;
  width: 100%;
  height: 3rem;
  margin-bottom: 1.5rem;
}

.form-label {
  position: absolute;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: inherit;
  left: 1rem;
  top: 0.75rem;
  padding: 0 0.25rem;
  color: black;
  background: #fff;
  transition: all 0.3s ease;
}

.form-input {
  position: absolute;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: inherit;
  top: 0;
  left: 0;
  z-index: 1;
  resize: none;
  width: 100%;
  height: auto;
  padding: 0.75rem 1.25rem;
  border-radius: 0.25rem;
  border: 1px solid #fff;
  color: black;
  background: transparent;
  transition: all 0.2s ease-in-out;
}

.form-input::placeholder {
  opacity: 0;
  visibility: hidden;
  color: transparent;
}

.form-input:focus {
  outline: none;
  border: 2px solid #fff;
}

.form-input:focus ~ .form-label {
  top: -0.75rem;
  left: 1rem;
  z-index: 5;
  font-size: 0.875rem;
  font-weight: 500;
  color: black;
  transition: all 0.2s ease-in-out;
}

.form-input:not(:placeholder-shown).form-input:not(:focus) ~ .form-label {
  top: -0.75rem;
  left: 1rem;
  z-index: 9;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
}

.contact-column {
  max-width: 30rem;
  width: 100%;
  height: auto;
  margin: 0 auto;
}

.submit-button {
  width: 80%;
  margin: 0 auto;
  text-align: center;
}

.buttons-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.submit-button button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 1rem;
  width: 80%;
  background: #ebe0e0;
  color: rgba(0, 0, 0, 0.8);
  font-weight: 700;
  border: none;
  border-radius: 5px;
  transition: 200ms;
  cursor: pointer;
}

.submit-button button:hover {
  background: #cfcbcb;
}

.submit-button img {
  width: 2rem;
}

.submit-button p {
  font-weight: 500;
  margin-top: 1rem;
  color: rgba(0, 0, 0, 0.7);
}

input[type="submit"] {
  padding: 0.6rem 1rem;
  width: 80%;
  background: #151515;
  color: #fff;
  font-weight: 700;
  border: none;
  border-radius: 5px;
  transition: 200ms;
  cursor: pointer;
}

input[type="submit"]:hover {
  background: #2c2a2a;
}

@media screen and (max-width: 600px) {
  .close-icon {
    position: absolute;
    right: 1rem;
    top: 0.5rem;
  }

  .img-box {
    display: none;
  }

  .register-box {
    width: 100%;
  }

  .title {
    width: 100%;
    padding: 0 1.25rem;
  }

  h2 {
    text-align: center;
    font-size: 2.25rem;
  }

  p {
    font-size: 1.05rem;
    text-align: center;
    max-width: 100%;
    margin-top: 1rem;
    letter-spacing: 0;
  }

  .contact-inform {
    width: 90%;
    min-height: 70%;
  }

  .form-control {
    position: relative;
    width: 100%;
    height: 3rem;
    margin-bottom: 1rem;
  }

  .submit-button {
    position: relative;
    top: 2.5rem;
    width: 100%;
  }

  .buttons-box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .submit-button button {
    width: 100%;
    padding: 0.5rem;
  }

  .submit-button img {
    width: 1.5rem;
  }

  input[type="submit"] {
    width: 100%;
    padding: 0.5rem 1rem;
  }

  .input-columns {
    display: block;
    gap: 1rem;
    margin: 0.8rem 0;
  }
}

@media screen and (min-width: 601px) and (max-width: 930px) {
  .close-icon {
    position: absolute;
    right: 1rem;
    top: 0.5rem;
  }

  .img-box {
    display: none;
  }

  .register-box {
    width: 100%;
  }

  .title {
    width: 100%;
    padding: 0 1.25rem;
  }

  h2 {
    text-align: center;
    font-size: 2.25rem;
  }

  p {
    font-size: 1.05rem;
    text-align: center;
    max-width: 100%;
    margin-top: 1rem;
    letter-spacing: 0;
  }

  .contact-inform {
    width: 90%;
    min-height: 60%;
  }

  .form-control {
    position: relative;
    width: 100%;
    height: 3rem;
    margin-bottom: 1rem;
  }

  .submit-button {
    position: relative;
    top: 2.5rem;
    width: 45%;
  }

  .buttons-box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .submit-button button {
    width: 100%;
    padding: 0.5rem;
  }

  .submit-button img {
    width: 1.5rem;
  }

  input[type="submit"] {
    width: 100%;
    padding: 0.5rem 1rem;
  }
}

@media screen and (min-width: 931px) and (max-width: 1366px) {
  .close-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
  }

  .img-box {
    width: 40%;
  }

  .register-box {
    width: 60%;
  }

  .title {
    width: 100%;
    padding: 0 1.25rem;
  }

  h2 {
    text-align: center;
    font-size: 2.25rem;
  }

  p {
    font-size: 1.05rem;
    text-align: center;
    max-width: 100%;
    margin-top: 1rem;
    letter-spacing: 0;
  }

  .contact-inform {
    width: 90%;
    min-height: 60%;
  }

  .form-control {
    position: relative;
    width: 100%;
    height: 3rem;
    margin-bottom: 1rem;
  }

  .submit-button {
    position: relative;
    top: 2.5rem;
    width: 55%;
  }

  .buttons-box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .submit-button button {
    width: 100%;
    padding: 0.5rem;
  }

  .submit-button img {
    width: 1.5rem;
  }

  input[type="submit"] {
    width: 100%;
    padding: 0.5rem 1rem;
  }
}
</style>
