<template>
  <Navbarre />
  <NavbarreAdmin />
</template>

<script>
import Navbarre from "../components/Navbarre.vue";
import NavbarreAdmin from "../components/NavbarreAdmin.vue";
export default {
  components: {
    Navbarre: Navbarre,
    NavbarreAdmin: NavbarreAdmin,
  },
};
</script>