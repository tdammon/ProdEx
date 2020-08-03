<template>
  <div class="home">
    <Header />
    <Disinfectants />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Disinfectants from "@/components/DisinfectantsPage1.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "DisinfectantsPage",
  components: {
    Header,
    Disinfectants,
    Footer
  }
};
</script>
