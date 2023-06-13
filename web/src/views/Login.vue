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
      <img src="@/assets/login/login2.jpg" alt="" />
    </div>
    <div class="register-box">
      <div class="title">
        <h2>Contece-se ao seu perfil</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic incidunt
          tenetur nobis fugit enim soluta, nemo dolor ducimus odio voluptate!
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
        <div class="submit-button">
          <div class="buttons-box">
            <input type="submit" value="Entrar" />
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
  name: "Login",
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
  max-width: 500px;
}

.input-columns {
  display: flex;
  gap: 1rem;
  z-index: -1;
}

.form-control {
  position: relative;
  margin: 0 auto;
  width: 80%;
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
  z-index: 5;
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

.contact-inform {
  width: 50%;
  min-height: 35%;
  padding: 4rem 2rem 2rem;
  border-radius: 0.25rem;
  color: black;
  background: #ffffff;
}

.submit-button {
  width: 80%;
  margin: 0 auto;
  background: dodgerblue;
  text-align: center;
}

.buttons-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.submit-button button {
  padding: 0.5rem 1rem;
  width: 50%;
  background: #f6f6f6;
  color: #151515;
  font-weight: 700;
  border: none;
  border-radius: 5px;
  transition: 200ms;
  cursor: pointer;
}

.submit-button img {
  width: 2rem;
}

input[type="submit"] {
  padding: 0.5rem 1rem;
  width: 50%;
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
</style>
