<template>
  <NavbarreAdmin />
  <AllServices />
  <Footer></Footer>
</template>

<script>
import NavbarreAdmin from "../../components/NavbarreAdmin.vue";
import Footer from "../../components/Footer.vue";
import AllServices from "../../components/AllServices.vue";

export default {
  components: {
    Footer,
    NavbarreAdmin,
    AllServices,
  },
};
</script>

