<template>
  <!--page d'afffichage du catalogue des produits avec imports de différent composants-->
  <NavbarreAdmin />
  <ProductsByServiceId :servicesId="this.servicesId" />
  <Footer></Footer>
</template>

<script>
import NavbarreAdmin from "../../components/NavbarreAdmin.vue";
import Footer from "../../components/Footer.vue";
import ProductsByServiceId from "../../components/Catalogue/ProductsByServiceId.vue";

export default {
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
  },
  methods: {
    async mounted() {
      console.log(this.servicesId);
    },
  },
};
</script>