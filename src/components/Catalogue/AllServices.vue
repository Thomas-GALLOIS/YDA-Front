<template>
  <h1>Services</h1>
  <!--component de selection du type-->
  <SelectType @change="getOptionValue($event)" />
  <!--v-for pour afficher tout les services en BDD -->
  <div
    class="service_card"
    v-for="(element, index) in filterTypeId"
    :key="index"
    @click="showServiceProducts(element.id)"
  >
    <div class="image">
      <img src="https://i.imgur.com/EHDYFaT.jpeg" />
    </div>
    <div class="title_description">
      <h2>{{ element.name }}</h2>
      <p>{{ element.description_1 }}</p>
    </div>
  </div>
</template>
<script>
/*import du composant selecttype*/
import SelectType from "../UI/SelectTypes.vue";

export default {
  data() {
    return {
      servicesArray: [],
      id: "",
      type_id: "",
      selected: "",
      getValueFromOptions: "",
    };
  },
  components: {
    SelectType: SelectType,
  },
  async mounted() {
    /*requete pour récuperer au montage tout les services en BDD*/
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
    this.type_id = data.donnees.type_id;
  },
  /* method au click pour selectionner le bon service avec le bon ID qui renvoie vers la page des produits de ce service selectionné */

  methods: {
    async showServiceProducts(id) {
      this.$router.replace({
        name: "CatalogueProducts",
        params: { servicesId: id },
      });
    },
    /*async filterTypeId(event) {
      const url = `http://127.0.0.1:8000/api/services/${event.target.value}`;
      const options = {
        method: "GET",

        headers: {
          "Content-Type": "application/json",
          Authorization: "bearer " + localStorage.getItem("token"),
        },
      };
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
    },*/

    /*récupération de l'event change sur le select pour la fonction de filtre ci dessous*/
    getOptionValue(event) {
      this.getValueFromOptions = event.target.value;
    },
  },
  computed: {
    /* fonction de filtre par type de services*/
    filterTypeId() {
      return this.servicesArray.filter((element) => {
        if (this.getValueFromOptions != "") {
          return element.type_id == this.getValueFromOptions;
        } else {
          return element.type_id;
        }
      });
    },
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
  box-shadow: 2px 1px 9px 0px black;
}

.service_card:hover {
  box-shadow: inset 2px 1px 9px 0px black;
}

.image {
  margin-left: 1%;
}

.title_description {
  margin-left: 5%;
}
</style>