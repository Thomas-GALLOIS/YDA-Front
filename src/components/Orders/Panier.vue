<template>
  <h1>Panier</h1>
  <div v-for="(element, index) in this.cart" :key="index">
    <p>commentaire:{{ element.comment }}</p>

    <p>quantité:{{ element.quantity }}</p>
    <p>Produit:{{ element.name }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: JSON.parse(localStorage.getItem("@cart")),
      product: [],
      toto: "",
      getValueFromOptions: "",
    };
  },
  async mounted() {
    const url = "http://127.0.0.1:8000/api/products/";

    const options = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("@token"),
        Accept: "application/json",
      },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);

    this.product = data.donnees;
  },

  methods: {},
};
</script>