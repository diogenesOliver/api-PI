<template>
  <section>
    <header>
      <div class="logo">
        <img src="@/assets/imgs/logo.png" alt="" />
      </div>
      <div class="login">
        <router-link to="/">
          <img
            class="close-icon"
            src="@/assets/icons/close_white_48dp.svg"
            alt=""
          />
        </router-link>
      </div>
    </header>
    <div class="container">
      <div class="title">
        <h3>Bem-vindo, Fulano!</h3>
        <p>
          Por gentileza, complete seu cadastro com alguns dados pessoais para
          conhecermos um pouco mais sobre você.
        </p>
      </div>
      <form class="contact-inform form">
        <div class="input-columns">
          <div class="form-control">
            <input
              v-model="user.height"
              v-mask="'#.##m'"
              type="text"
              class="form-input"
              placeholder="none"
              required
            />
            <label for="email" class="form-label">Altura</label>
          </div>
          <div class="form-control">
            <input
              v-model="user.weight"
              v-mask="'##.#kg'"
              type="text"
              class="form-input"
              placeholder="none"
              required
            />
            <label for="email" class="form-label">Peso</label>
          </div>
        </div>
        <div class="input-columns">
          <div class="form-control">
            <input
              v-model="user.age"
              v-mask="'##'"
              type="text"
              class="form-input"
              placeholder="none"
              required
            />
            <label for="email" class="form-label">Idade</label>
          </div>
          <div class="form-control">
            <input
              v-model="user.idk"
              v-mask="'##.#kg'"
              type="text"
              class="form-input"
              placeholder="none"
              required
            />
            <label for="email" class="form-label">A decidir</label>
          </div>
        </div>
        <div class="title">
          <h3>Qual o seu grupo alimentar?</h3>
        </div>
        <div class="food-group">
          <div class="input-box">
            <input
              type="radio"
              name="food-radio"
              id="carnivore"
              v-model="isCarnivore"
            />
            <label for="carnivore">Carnivoro</label>
          </div>
          <div class="input-box">
            <input
              type="radio"
              name="food-radio"
              id="vegetarian"
              v-model="isVeg"
            />
            <label for="vegetarian">Vegetariano</label>
          </div>
          <div class="input-box">
            <input
              type="radio"
              name="food-radio"
              id="vegan"
              v-model="isVegan"
            />
            <label for="vegan">Vegano</label>
          </div>
        </div>
        <div class="title">
          <h3>Você possui alguma lesão que impossibilita de treinar?</h3>
        </div>
        <div class="lesion-box">
          <div class="test">
            <input type="checkbox" id="lesionCChk" />
            <label for="lesionCChk">Lesão no peitoral</label>
          </div>
          <div class="test">
            <input type="checkbox" id="lesionAChk" />
            <label for="lesionAChk">Lesão no braço</label>
          </div>
          <div class="test">
            <input type="checkbox" id="lesionRChk" />
            <label for="lesionRChk">Lesão no quadril</label>
          </div>
          <div class="test">
            <input type="checkbox" id="lesionLChk" />
            <label for="lesionLChk">Lesão na perna</label>
          </div>
        </div>
      </form>
      <button class="register-button">Continuar</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "UserForm",

  data() {
    return {
      user: {
        height: "",
        weight: "",
      },
    };
  },
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
  box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.5);
}

.logo img {
  width: 13rem;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80%;
}

.title h3 {
  font-size: 1.45rem;
  color: rgba(0, 0, 0, 0.9);
  background: #ffffff;
  margin: 1.5rem 0;
}

.title p {
  color: black;
}

.contact-inform {
  width: 88%;
  min-height: 50%;
  padding: 1rem 2rem;
  border-radius: 0.25rem;
  color: black;
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

/*.input-box {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.input-box input {
  margin-bottom: .45rem;
}*/

.food-group {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.lesion-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.food-group input,
.lesion-box input {
  margin: 0 0.5rem;
}

.register-button {
  position: relative;
  top: 5rem;
  width: 10%;
  padding: 0.5rem 1rem;
  color: #f6f6f6;
  font-weight: 700;
  background: #151515;
  outline: none;
  border: none;
  border-radius: 5px;
  transition: 200ms;
  cursor: pointer;
}
</style>
