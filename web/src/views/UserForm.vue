<template>
  <main>
    <UserHeader />
    <section>
      <div class="title">
        <h2>Bem-vindo, Fulano!</h2>
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
              type="email"
              name="email"
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
              type="email"
              name="email"
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
              type="email"
              name="email"
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
              type="email"
              name="email"
              class="form-input"
              placeholder="none"
              required
            />
            <label for="email" class="form-label">Peso</label>
          </div>
        </div>
        <div class="food-group">
          <div class="title">
            <h3>Qual o seu grupo alimentar?</h3>
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
        </div>
      </form>
    </section>
  </main>
</template>

<script>
import UserHeader from "@/components/UserHeader.vue";
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

  components: {
    UserHeader,
  },
};
</script>

<style scoped>
main {
  height: 85vh;
}

section {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: #fff;
}

.title {
  color: black;
  background: #ffffff;
}

.contact-inform {
  width: 45%;
  min-height: 50%;
  padding: 4rem 2rem 2rem;
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

.input-box {
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* .input-box input {
  display: flex;
} */
</style>
