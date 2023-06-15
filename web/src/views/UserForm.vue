<template>
  <main>
    <UserHeader />
    <section>
      <div class="title">
        <h2>Bem-vindo, Fulano!</h2>
        <p>Por gentileza, complete seu cadastro com alguns dados pessoais e assim prosseguirmos para seus treinamentos.</p>
        <form class="contact-inform form">
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
        </form>
      </div>
    </section>
  </main>
</template>

<script>
import UserHeader from '@/components/UserHeader.vue';
export default {
  name: "UserForm",

  components: {
    UserHeader
  }
}
</script>

<style scoped>
main {
  height: 100vh;
  background: #fff;
}

.title {

  margin: 0 auto;
  color: black;
}

section {
  height: 85%;
  width: 80%;
  margin: 0 auto;
  background: dodgerblue;
}
.contact-inform {
  width: 50%;
  min-height: 47%;
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
</style>