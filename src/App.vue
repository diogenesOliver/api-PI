<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from "@/views/Home.vue";
export default {
  name: "App",

  components: {
    Home
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato&family=Montserrat:wght@300;400;500;700&family=Poppins:wght@200;300;400;500;700&family=Roboto:wght@400;500&display=swap");

:root {
  --font-poppins: "Poppins", sans-serif;
  --font-lato: "Lato", sans-serif;
  --font-montserrat: "Montserrat", sans-serif;
  --font-roboto: "Roboto", sans-serif;
  --main-blue: hsl(217, 64%, 31%);
  --main-orange: hsl(45, 100%, 50%);
  --main-dark: hsl(212, 33%, 9%);
  --primary-dark-low: hsl(217, 19%, 14%);
  --main-dark-low: hsla(0, 0%, 0%, 0.8);
  --main-white: hsl(180, 22%, 90%);
  --primary-cream: hsl(52, 19%, 85%);
}

html {
  scroll-behavior: smooth;
}

body {
  background: hsl(210, 17%, 9%);
  color: #fff;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}

/* .header-wrapper {
  margin: 0 auto;
  width: 1450px;
} */

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