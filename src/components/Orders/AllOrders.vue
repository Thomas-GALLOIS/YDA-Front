<template>
  <h2>Listes des commandes</h2>
  <br />
  <table>
    <tr>
      <td>Commande n°</td>
      <td>
        <select name="status" id="status" @change="getOptionValue($event)">
          <option value="">Statuts</option>
          <option value="en cours">En cours</option>
          <option value="en attente">En attente</option>
          <option value="terminée">Terminées</option>
        </select>
      </td>
      <td>Prix total</td>
      <td>Commentaires</td>
      <td>Note Admin</td>
      <td>Date création</td>
      <td>Date dernière modification</td>
    </tr>
    <!--v-for pour afficher tout les commandes en BDD -->

    <tr v-for="(element, index) in filterStatus" :key="index">
      <td>{{ element.id }}</td>
      <td>{{ element.status }}</td>
      <td>{{ element.total }}€</td>
      <td>{{ element.comments }}</td>
      <td>{{ element.note_admin }}</td>
      <td>{{ element.created_at }}</td>
      <td>{{ element.updated_at }}</td>
    </tr>
  </table>
</template>
<script>
export default {
  data() {
    return {
      ordersList: [],
      id: "",
      status: "",
      getValueFromOptions: "",
    };
  },

  async mounted() {
    /*requete pour récuperer au montage toutes les commandes en BDD*/
    const url = "http://127.0.0.1:8000/api/orders";
    //Options de la requête API
    const options = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("@token"),
      },
    };
    // va chercher les options de l'API
    const response = await fetch(url, options);
    // la récupération des data stockées dans l'API
    const data = await response.json();
    this.ordersList = data.donnees;
  },
  methods: {
    /*récupération de l'event change sur le select pour la fonction de filtre ci dessous*/
    getOptionValue(event) {
      this.getValueFromOptions = event.target.value;
      console.log(this.getValueFromOptions);
    },
  },
  computed: {
    /* fonction de filtre par status*/

    filterStatus() {
      return this.ordersList.filter((element) => {
        if (this.getValueFromOptions != "") {
          return String(this.getValueFromOptions) == String(element.status);
        } else {
          return true;
        }
      });
    },
  },
};
</script>

<style scoped>
.order_card {
  display: flex;
  flex-direction: column;
  margin: 2%;
  border-radius: 5px;
  border: 2px solid black;
  padding: 1%;
}

.groupeOrders {
  display: flex;
}
td {
  padding: 5px;
  border: black solid 1px;
}
table {
  display: inline-table;
}
</style>