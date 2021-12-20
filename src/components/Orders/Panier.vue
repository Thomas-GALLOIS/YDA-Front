<template>
  <h1>Panier</h1>
  <div v-for="(element, index) in this.cart" :key="index">
    <div v-for="(value, index) in element.cart" :key="index">
      <p>commentaire:{{ value.comment }}</p>
      <p>id:{{ value.id }}</p>
      <p>quantité:{{ value.quantity }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: JSON.parse(localStorage.getItem("@cart")),
    };
  },
  async mounted() {
    const url = "http://127.0.0.1:8000/api/products/";

    const options = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("@token"),
      },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
  },
};
</script>