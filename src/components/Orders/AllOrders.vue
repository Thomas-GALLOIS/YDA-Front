<template>
  <h2>Listes des commandes</h2>
  <br />
  <table v-for="(element, index) in ordersList" :key="index">
    <thead>
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
        <td>Nom entreprise</td>
        <td>Nom salarié</td>
      </tr>
    </thead>

    <!--v-for pour afficher tout les commandes en BDD -->
    <tbody v-for="(user, index) in element.users" :key="index">
      <tr v-for="(order, index) in user.orders" :key="index">
        <td>{{ order.id }}</td>
        <td>{{ order.status }}</td>
        <td>{{ order.total }}€</td>
        <td>{{ order.comments }}</td>
        <td>{{ order.note_admin }}</td>
        <td>{{ moment(order.created_at).format("DD MMM YYYY, HH:mm ") }}</td>
        <td>
          {{ moment(order.updated_at).format("DD MMM YYYY, HH:mm ") }}
        </td>
        <td>{{ element.name }}</td>
        <td>{{ user.firstname }} {{ user.lastname }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import moment from "moment";
export default {
  data() {
    return {
      ordersList: [],
      id: "",
      status: "",
      getValueFromOptions: "",
    };
  },
  created: function () {
    this.moment = moment;
  },

  async mounted() {
    /*requete pour récuperer au montage tout les entreprises, et les users avec leurs commandes en BDD*/
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

    this.ordersList = data;
    console.log(this.ordersList);
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