<template>
  <Navbarre v-if="this.role.value !== 'admin'" />
  <NavbarreAdmin />

  <h1>Panier</h1>
  <button @click="sendCart">Valider votre commande</button>
  <div class="cart_container">
    <Panier />
  </div>
</template>

<script>
import Panier from "../components/Orders/Panier.vue";
import NavbarreAdmin from "../components/NavbarreAdmin.vue";
import Navbarre from "../components/Navbarre.vue";
export default {
  inject: ["role"],
  components: {
    NavbarreAdmin: NavbarreAdmin,
    Navbarre: Navbarre,
    Panier: Panier,
  },
  methods: {
    async sendCart() {
      const url = "http://127.0.0.1:8000/api/orders";
      const storage = JSON.parse(localStorage.getItem("@cart"));
      const options = {
        method: "POST",

        headers: {
          Authorization: "Bearer " + localStorage.getItem("@token"),
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          products: storage,
        }),
      };
      const response = await fetch(url, options);

      const data = await response.json();

      console.log(data);
    },
  },
};
</script>
<style scoped>
.cart_container {
  display: flex;
  flex: wrap;
}
</style>