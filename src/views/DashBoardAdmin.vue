<template>
  <NavbarreAdmin />

</template>

<script>

import NavbarreAdmin from "../components/NavbarreAdmin.vue";
import Footer from "../components/Footer.vue";
export default {
  data() {
    return {
      token: localStorage.getItem("@token"),
      toto: false,
    };
  },
  components: {
    NavbarreAdmin: NavbarreAdmin,
    Footer: Footer,
  },
  methods: {
    jesuis() {
      if (this.toto == false) {
        this.toto = true;
      }
      if (this.toto == true) {
        this.toto == false;
      }
    },
  },
};
</script>