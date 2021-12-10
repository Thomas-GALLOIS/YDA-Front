<template>
  <Navbarre />

  <Footer></Footer>
</template>
<script>
import Footer from "../components/Footer.vue";
import Navbarre from "../components/Navbarre.vue";
export default {
  data() {
    return {};
  },

  components: {
    Footer,
    Navbarre,
  },

  methods: {
    async connectUser() {},
  },
};
</script>
<style scoped>
</style>