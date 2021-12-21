<template>
  <Navbarre />
  <div>
    <div class="titre-profil">
      <h1 v-show="!this.show">Consultation de profil</h1>
      <h1 v-show="this.show">Modification de profil</h1>
    </div>
    <div>
      <div class="date-form">
        <p class="date">
          Bonjour,<br />Le
          {{ this.today }}
        </p>
      </div>
      <div class="content">
        <div class="prof">
          <br />

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
          <div class="profil-form">
            <button class="boutonModif" @click="this.show = true">
              Modifier mon profil
            </button>
          </div>
        </div>

        <div class="partie-profil">
          <br />
          <div class="modif-form" v-show="this.show">
            <p>Entrer vos modifications ici :</p>

            <input type="text" v-model="lastname" />
            <input type="text" v-model="firstname" />
            <input type="text" v-model="email" />
            <input type="text" v-model="phone" />
            <input
              type="date"
              placeholder="Date de naissance"
              v-model="birthday"
            />

            <br />
            <br />

            <button class="boutonSauv" @click="putUser">Sauvegarder</button>
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
  },
  methods: {
    async putUser() {
      const url =
        "http://127.0.0.1:8000/api/users/" + localStorage.getItem("@id");

      const options = {
        method: "PUT",
        headers: {
          Authorization: "bearer " + localStorage.getItem("@token"),

          "X-Requested-With": "XMLHttpRequest",
          "content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          phone: this.phone,
          birthday: this.birthday,
        }),
      };
      console.log(this.newfirstname);
      const res = await fetch(url, options);
      console.log(res);
      const datauser = await res.json();
      console.log("voici le log de la res put user");
      console.log(datauser);
    },
  },
};
</script>
<style>
.content {
  display: flex;
  flex-direction: row;
  align-content: center;
}

.prof {
  margin-left: 50px;
}

.modif-form {
  display: flex;
  flex-direction: column;
}

input {
  width: 50%;
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
</style>