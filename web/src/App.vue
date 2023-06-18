<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Home from "@/views/Home.vue";
export default {
  name: "App",

  components: {
    Home,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato&family=Montserrat:wght@300;400;500;700&family=Poppins:wght@200;300;400;500;700&family=Roboto:wght@400;500&display=swap");

:root {
  --font-poppins: "Poppins", sans-serif;
  --main-dark: hsl(212, 33%, 9%);
  --primary-dark-low: hsl(217, 19%, 14%);
  --main-dark-low: hsla(0, 0%, 0%, 0.8);
  --main-white: hsl(180, 22%, 90%);
}

html {
  scroll-behavior: smooth;
}

body {
  background: hsl(210, 17%, 9%);
  color: #fff;
  font-family: var(--font-poppins);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-2em);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 200ms ease;
}
</style>
