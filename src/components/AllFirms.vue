<template>
  <h1>Listes des entreprises enregistrées</h1>

  <!--v-for pour afficher tout les entreprises en BDD -->
  <div class="firm_card" v-for="(element, index) in firmList" :key="index">
    <div class="title_description">
      <h2>{{ element.name }}</h2>
      <p>{{ element.address }}</p>
      <p>{{ element.phone }}</p>
      <p>{{ element.email }}</p>
      <p>{{ element.logo }}</p>
      <p>{{ element.siret }}</p>
      <p>{{ element.subscription }}</p>
      <p>1er passage: {{ element.visit_day_time_1 }}</p>
      <p>2ème passage:{{ element.visit_day_time_2 }}</p>
      <p>{{ element.news }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      firmList: [],
      id: "",
    };
  },

  async mounted() {
    /*requete pour récuperer au montage tout les entreprises en BDD*/
    const url = "http://127.0.0.1:8000/api/firms";
    //Options de la requête API
    const options = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("@token"),
      },
    };
    // va chercher les options de l'API
    const response = await fetch(url, options);
    console.log(response);
    // la récupération des data stockées dans l'API
    const data = await response.json();
    console.log(data);

    this.firmList = data;
    console.log(this.firmList);
  },
};
</script>

<style scoped>
img {
  width: 15rem;
  height: 15rem;
}

.firm_card {
  font-size: 1rem;
  width: 25%;
  margin: 5%;
  padding: 1%;
  border: 1px solid #000;
  border-radius: 20px;
  box-shadow: 2px 1px 9px 0px black;
}

.firm_card:hover {
  box-shadow: inset 2px 1px 9px 0px black;
}

.image {
  margin-left: 1%;
}

.title_description {
  margin-left: 5%;
}
</style>