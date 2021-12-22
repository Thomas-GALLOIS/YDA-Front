<template>
  <Navbarre />

  <div class="titre-profil">
    <h1 v-show="!this.show">Bonjour {{ this.firstname }}</h1>
    <h1 v-show="this.show">Modification de profil</h1>
  </div>
  <div class="dpt">
    <div>
      <div class="date-form">
        <p class="date">
          Bonjour, {{ this.firstname }}<br />Le
          {{ this.today }}
        </p>
      </div>
      <div>
        <p>
          Ma société : <span class="id">{{ this.name }}</span>
        </p>
      </div>
      <br />
      <div>
        <p>
          Nom : <span class="id">{{ this.lastname }}</span>
        </p>
        <p>
          Prenom : <span class="id">{{ this.firstname }}</span>
        </p>
        <p>
          Mail : <span class="id">{{ this.email }}</span>
        </p>
        <p>
          Téléphone : <span class="id">{{ this.phone }}</span>
        </p>
        <p>
          Date de naissance : <span class="id">{{ this.birthday }}</span>
        </p>
      </div>
    </div>
    <div>
      <button class="boutonSauv" @click="editFirm">MES COMMANDES</button>
    </div>
    <div class="order_part">
      <div
        class="order_card"
        v-for="(element, index) in orderList"
        :key="index"
      >
        <div class="order_card_list">
          <p>
            Commande N°: {{ element.id
            }}<span> du {{ element.created_at }}</span>
          </p>

          <p>Commentaire : {{ element.comments }}</p>

          <p>Status : {{ element.status }}</p>
        </div>
        <div class="odetail_part">
          <div
            class="odetail_card"
            v-for="(odetail, i) in element.odetails"
            :key="i"
          >
            <p>
              Détails commmande : Prix :{{ odetail.price_product }} Quantité :
              {{ odetail.qtty }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>
<script>
import Footer from "../components/Footer.vue";
import Navbarre from "../components/Navbarre.vue";

export default {
  name: "EditProfil",
  components: {
    Footer: Footer,
    Navbarre,
  },
  data() {
    return {
      lastname: "",
      firstname: "",
      email: "",
      id: "",
      phone: "",
      birthday: "",
      firm_id: "",
      name: "",
      orderList: [],

      today: new Date().toLocaleString(),

      show: false,
    };
  },

  async mounted() {
    const url =
      "http://127.0.0.1:8000/api/users/" +
      +localStorage.getItem("@id") +
      "edit";

    const options = {
      method: "GET",
      headers: {
        Authorization: "bearer " + localStorage.getItem("@token"),
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(url, options);
    console.log(response);
    const data = await response.json();
    console.log(data);
    this.firstname = data.donnees[0].firstname;
    this.lastname = data.donnees[0].lastname;
    this.email = data.donnees[0].email;
    this.id = data.donnees[0].id;
    this.phone = data.donnees[0].phone;
    this.birthday = data.donnees[0].birthday;
    this.firm_id = data.donnees[0].firm_id;
    console.log(this.firm_id);
    this.orderList = data.donnees[0].orders;
    console.log(this.orderList);
  },

  methods: {
    async editFirm() {
      const url = "http://127.0.0.1:8000/api/firms/" + this.firm_id;

      const options = {
        method: "GET",
        headers: {
          Authorization: "bearer " + localStorage.getItem("@token"),
          "content-Type": "application/json",
        },
      };
      const response = await fetch(url, options);
      console.log(response);
      const data = await response.json();
      console.log(data);
      this.name = data.tab_firms[0].name;
    },
  },
};
</script>
<style scoped>
.dpt {
  display: flex;
  flex-direction: row;
}

.order_part {
  padding: 5px;
  margin: 5px;
  border: 1px black solid;
  border-radius: 5px;
  background-color: rgba(219, 144, 36, 0.6);
  overflow: scroll;
}

.order_card {
  margin: 5px;
  border-bottom: 1px black solid;
  display: flex;
  flex-direction: row;
}

.order_card_list {
  display: flex;
  flex-direction: row;
}
.order_card_list p {
  margin: 5px;
}

.odetail_card {
  overflow: scroll;
  display: flex;
  flex-direction: row;
}
</style>
