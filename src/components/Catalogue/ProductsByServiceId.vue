<template>
  <h1>Products</h1>
  <div v-for="(element, index) in productsArray" :key="index">
    <div
      class="product_card"
      v-for="(value, index) in element.products"
      :key="index"
    >
      <div class="image">
        <img src="https://i.imgur.com/EHDYFaT.jpeg" />
      </div>
      <div class="title_description">
        <h2>{{ value.name }}</h2>
        <p>{{ value.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    servicesId: String,
  },
  data() {
    return {
      productsArray: "",
      id: "",
    };
  },
  async mounted() {
    console.log(this.servicesId);
    const url = `http://127.0.0.1:8000/api/services/${this.servicesId}`;

    const options = {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + localStorage.getItem("token"),
      },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    this.productsArray = data.donnees;
    console.log(this.productsArray);
  },
};
</script>

<style scoped>
img {
  width: 15rem;
  height: 15rem;
}

.product_card {
  display: flex;
  justify-content: flex-start;
  align-content: space-around;
  align-items: center;
  margin: 5%;
  padding: 1%;
  border: 1px solid black;
  border-radius: 20px;
  box-shadow: 2px 1px 9px 0px black;
}

.product_card:hover {
  box-shadow: inset 2px 1px 9px 0px black;
}

.image {
  margin-left: 1%;
}

.title_description {
  margin-left: 5%;
}
</style>