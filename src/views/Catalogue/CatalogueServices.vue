<template>
  <!--page d'afffichage du catalogue des services avec imports de différent composants-->

  <NavbarreAdmin />
  <AllServices />
  <Footer></Footer>
</template>

<script>
import NavbarreAdmin from "../../components/NavbarreAdmin.vue";
import Footer from "../../components/Footer.vue";
import AllServices from "../../components/Catalogue/AllServices.vue";

export default {
  components: {
    Footer,
    NavbarreAdmin,
    AllServices,
  },
};
</script>

