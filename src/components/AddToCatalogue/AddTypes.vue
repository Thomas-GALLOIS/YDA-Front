<template>
  <h1>Ajouter un nouveau Type:</h1>
  <form @submit.prevent="addType">
    <label for="name">Type</label>
    <input type="text" v-model="name" id="name" />

    <input type="submit" value="Envoyer" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    async addType() {
      const url = "http://127.0.0.1:8000/api/types";

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("@token"),
        },
        body: JSON.stringify({
          name: this.name,
        }),
      };
      const response = await fetch(url, options);
      console.log(response);
      const data = await response.json();
      console.log(data);
    },
  },
};
</script>