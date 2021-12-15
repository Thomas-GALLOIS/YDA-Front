<template>
  <NavbarreAdmin />
  <ProductsByServiceId />
  <Footer></Footer>
</template>

<script>
import NavbarreAdmin from "../../components/NavbarreAdmin.vue";
import Footer from "../../components/Footer.vue";
import ProductsByServiceId from "../../components/Catalogue/ProductsByServiceId.vue";

export default {
  components: {
    Footer,
    NavbarreAdmin,
    ProductsByServiceId,
  },
};
</script>