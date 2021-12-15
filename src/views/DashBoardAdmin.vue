<template>
  <NavbarreAdmin />
</template>

<script>
import NavbarreAdmin from "../components/NavbarreAdmin.vue";

export default {
  data() {
    return {
      token: localStorage.getItem("@token"),
      
    };
  },
  components: {
    NavbarreAdmin: NavbarreAdmin,
  },

};
</script>