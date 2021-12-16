<template>
  <h1>Ajouter un nouveau Type</h1>
  <div>
    <!--message suite au succés ou non de la requête -->
    <p v-if="this.status == 200">Votre Type à bien été crée</p>
    <p v-if="this.res == 500">Oups un problème est survenu</p>
  </div>
  <!--formulaire d'ajout d'un type de service -->
  <form @submit.prevent="addType">
    <label for="name">Type</label>
    <input type="text" v-model="name" id="name" />

    <input type="submit" value="Envoyer" id="submit_btn" />
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
    /* method pour ajouter un type de service en bdd avec vérification du token */
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
select {
  width: 200px;
  height: 30px;
  margin: 15px 0;
  border: 1px solid transparent;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}
select:focus {
  box-shadow: inset 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  outline: none;
}
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
#submit_btn {
  width: 200px;
  margin-top: 20px;
  color: #0f0f0f;
  background: #db9024;
  cursor: pointer;
  border: 2px solid #0f0f0f;
  transition: background 1s;
  height: 40px;
}
#submit_btn:hover {
  color: #db9024;
  background: #0f0f0f;
  border: 2px solid #db9024;
  transition: background 1s;
}
</style>