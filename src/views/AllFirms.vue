<template>
  <NavbarreAdmin />
  <AllFirms />
  <Footer />
</template>

<script>
import NavbarreAdmin from "../components/NavbarreAdmin.vue";
import AllFirms from "../components/AllFirms.vue";
import Footer from "../components/Footer.vue";

export default {
  props: {
    firmId: String,
  },
  data() {
    return {
      token: localStorage.getItem("@token"),
    };
  },
  components: {
    NavbarreAdmin: NavbarreAdmin,
    AllFirms: AllFirms,
    Footer: Footer,
  },
};
</script>