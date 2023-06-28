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
import About from "@/components/Land/About.vue";
import Header from "@/components/Land/Header.vue";
import Banner from "@/components/Land/Banner.vue";
import Goals from "@/components/Land/Goals.vue";
import Footer from "@/components/Land/Footer.vue";
import Services from "@/components/Land/Services.vue";
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
