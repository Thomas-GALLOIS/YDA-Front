<template>
  <h1>Listes des commandes</h1>

  <!--v-for pour afficher tout les commandes en BDD -->
  <div class="groupeOrders">
    <div class="order_card" v-for="(element, index) in ordersList" :key="index">
      <p>Commande n°{{ element.id }}</p>
      <p>Statut de la commande: {{ element.status }}</p>
      <p>Prix total: {{ element.total }}€</p>
      <p>Commentaire: {{ element.comments }}</p>
      <p>Note Admin: {{ element.note_admin }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ordersList: "",
      id: "",
      status: "",
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
    return this.ordersList.filter((item) => {
      item.status.includes("terminées");
    });
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
</style>