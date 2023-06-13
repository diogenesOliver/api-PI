<template>
  <div class="home">
    <Header />
    <Banner />
    <About />
    <Goals />
    <Services />
    <Footer />
  </div>
</template>

<script>
import About from "@/components/About.vue";
import Header from "@/components/Header.vue";
import Banner from "@/components/Banner.vue";
import Goals from "@/components/Goals.vue";
import Footer from "@/components/Footer.vue";
import Services from "@/components/Services.vue";
export default {
  name: "Home",

  components: {
    Header,
    Banner,
    Goals,
    Footer,
    About,
    Services,
  },
};
</script>
