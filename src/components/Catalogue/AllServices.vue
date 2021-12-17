<template>
  <router-link class="anim" to="/AddService"
    >Ajouter Un nouveau service</router-link
  >
  <h1>Services</h1>
  <!--component de selection du type-->
  <SelectType @change="getOptionValue($event)" />
  <!--v-for pour afficher tout les services en BDD -->
  <div>
    <Service
      v-for="(element, index) in filterTypeId"
      :key="index"
      :values="element"
    ></Service>
  </div>
</template>
<script>
/*import du composant product*/
import Service from "./Service.vue";
import SelectType from "../UI/SelectTypes.vue";

export default {
  data() {
    return {
      servicesArray: [],
      id: "",
      type_id: "",
      getValueFromOptions: "",
    };
  },
  components: {
    Service,
    SelectType,
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
          console.log("je suis un type id" + element.type_id);
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