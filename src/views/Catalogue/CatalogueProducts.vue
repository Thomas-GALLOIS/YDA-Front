<template>
  <!--page d'afffichage du catalogue des produits avec imports de différent composants-->
  <Navbarre v-if="this.role.value !== 'admin'" />
  <NavbarreAdmin v-if="this.role.value == 'admin'" />
  <ProductsByServiceId :servicesId="this.servicesId" />
  <Footer></Footer>
</template>

<script>
import NavbarreAdmin from "../../components/NavbarreAdmin.vue";
import Footer from "../../components/Footer.vue";
import ProductsByServiceId from "../../components/Catalogue/ProductsByServiceId.vue";
import Navbarre from "../../components/Navbarre.vue";

export default {
  inject: ["role"],
  data() {
    return {
      globalCart: [],
    };
  },
  props: {
    servicesId: String,
  },

  components: {
    Footer,
    NavbarreAdmin,
    ProductsByServiceId,
    Navbarre,
  },
  methods: {
    async mounted() {
      console.log(this.servicesId);
    },
  },
};
</script>