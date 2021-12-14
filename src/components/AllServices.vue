<template>
  <div
    class="service_card"
    v-for="(element, index) in servicesArray"
    :key="index"
  >
    <div class="image">
      <img src="https://i.imgur.com/EHDYFaT.jpeg" />
    </div>
    <div class="title_description">
      <h1>{{ element.name }}</h1>
      <p>{{ element.description_1 }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      servicesArray: "",
    };
  },
  async mounted() {
    const url = "http://127.0.0.1:8000/api/services";

    const options = {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + localStorage.getItem("token"),
      },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    //console.log(data);
    this.servicesArray = data.donnees;
    console.log(this.servicesArray);
  },
};
</script>

<style scoped>
img {
  width: 15rem;
  height: 15rem;
}

.service_card {
  display: flex;
  justify-content: flex-start;
  align-content: space-around;
  align-items: center;
  margin: 5%;
  padding: 1%;
  border: 1px solid black;
  border-radius: 20px;
  box-shadow: inset 2px 1px 9px 0px black;
}

.image {
  margin-left: 1%;
}

.title_description {
  margin-left: 5%;
}
</style>