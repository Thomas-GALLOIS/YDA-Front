<template>
  <!--page d'afffichage du catalogue des produits avec imports de différent composants-->
  <NavbarreAdmin />
  <ProductsByServiceId
    :servicesId="this.servicesId"
    :addToGlobal="addToGlobal"
  />
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
    addToGlobal(cart) {
      this.globalCart = [...this.globalCart, cart];
      localStorage.setItem("@cart", JSON.stringify(this.globalCart));
    },
  },
};
</script>