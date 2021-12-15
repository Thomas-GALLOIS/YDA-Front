<template>
  <h1>Ajouter un nouveau Type:</h1>
  <div>
    <p v-if="this.status == 200">Votre Type à bien été crée</p>
    <p v-if="this.res == 500">Oups un problème est survenu</p>
  </div>
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
      status: "",
      res: "",
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
      this.res = response.status;

      const data = await response.json();
      console.log(data);
      this.status = data.status_code;
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
input {
  width: 200px;
  height: 30px;
  margin: 15px auto;
  border: none;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  outline: none;
  transition: box-shadow 1.2s;
}
input:focus {
  box-shadow: inset 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  outline: none;
}
label {
  margin-right: 165px;
}
</style>