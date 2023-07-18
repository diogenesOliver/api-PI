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
        <h2>Conecte-se ao seu perfil</h2>
        <p>
          Bem-vindo(a)! Faça login para acessar um mundo de oportunidades
          fitness.
        </p>
      </div>
      <form name="contact" class="contact-inform form">
        <div class="form-control">
          <input type="email" class="form-input" placeholder="none" v-model="userDataLogin.email" required />
          <label for="name" class="form-label">E-mail</label>
        </div>
        <div class="form-control">
          <input
            type="password"
            name="password"
            class="form-input"
            placeholder="none"
            v-model="userDataLogin.senha"
            required
          />
          <label for="password" class="form-label">Senha</label>
        </div>
        <div class="submit-button">
          <div class="buttons-box">
            <input type="submit" @click.prevent="userLogin()"  value="Entrar" />
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
import axios from 'axios'

export default {
  name: "Login",

  data(){
    return {
      userDataLogin: {
        email: "",
        senha: ""
      }
    }
  },

  methods: {
    async userLogin(){
      try{
        await axios.post('http://localhost:3000/login', this.userDataLogin).then(res => {
          if(!(this.userDataLogin.email === res.data.email)){
            alert('Invalid email or password')
          }else{
            this.$router.push(`/user-form/${res.data.id}`)
          }
        })
      }catch(err){console.log(err) }
    }
  }

};
</script>

<style scoped>
section {
  position: relative;
  display: flex;
  width: 100%;
  height: 100dvh;
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

.contact-inform {
  width: 50%;
  min-height: 50%;
  padding: 4rem 2rem 2rem;
  border-radius: 0.25rem;
  color: black;
  background: #ffffff;
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

.submit-button {
  position: relative;
  top: 4.5rem;
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
  width: 85%;
  padding: 0.5rem 1rem;
  color: rgba(0, 0, 0, 0.8);
  font-weight: 700;
  background: #ebe0e0;
  outline: none;
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
  width: 85%;
  background: #151515;
  color: #fff;
  font-weight: 700;
  outline: none;
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
    top: 1.5rem;
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
    min-height: 50%;
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
}

@media screen and (min-width: 601px) and (max-width: 930px) {
  .close-icon {
    position: absolute;
    right: 1rem;
    top: 1.5rem;
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
    font-size: 2.65rem;
  }

  p {
    font-size: 1.15rem;
    text-align: center;
    max-width: 100%;
    margin-top: 1rem;
    letter-spacing: 0;
  }

  .contact-inform {
    width: 80%;
    min-height: 60%;
  }

  .form-control {
    width: 80%;
  }

  .submit-button {
    position: relative;
    top: 3.5rem;
    width: 80%;
  }

  .submit-button button {
    width: 100%;
    padding: 1rem;
  }

  .submit-button img {
    width: 1.5rem;
  }

  input[type="submit"] {
    width: 100%;
    padding: 1rem;
  }
}

@media screen and (min-width: 931px) and (max-width: 1366px) {
  .close-icon {
    position: absolute;
    right: 1rem;
    top: 1.5rem;
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
    font-size: 2.65rem;
  }

  p {
    font-size: 1.15rem;
    text-align: center;
    max-width: 100%;
    margin-top: 1rem;
    letter-spacing: 0;
  }

  .contact-inform {
    width: 80%;
    min-height: 60%;
  }

  .form-control {
    width: 80%;
  }

  .submit-button {
    position: relative;
    top: 3.5rem;
    width: 80%;
  }

  .submit-button button {
    width: 100%;
    padding: 1rem;
  }

  .submit-button img {
    width: 1.5rem;
  }

  input[type="submit"] {
    width: 100%;
    padding: 1rem;
  }
}
</style>
