<template>
  <Navbarre />
  <div class="profil">

    <h1>Hey {{this.firstname}} !</h1>
      <div>
            <p>
              Le  {{ this.today }}
            </p>
            <br/>
            <p>
              Nom : {{ this.lastname }}
            </p>

            <p>
              Prenom : {{ this.firstname }}
            </p>

            <p>
              Mail : {{ this.email }}
            </p>

            <p>
              Téléphone : {{ this.phone }}
            </p>

            <p>
              Date de naissance : {{ this.birthday }}
            </p>
      </div>
  </div>

    <div class="edit">
        <button class="edit_btn" @click="this.show = true">
          Modifier mon profil
        </button>


      <br />
      <div v-show="this.show">
        <p>Entrer vos modifications ici :</p>
        
        <div>
          <label for="name">Nom :</label>
        </div>
        <div>
          <input type="text" id="name" v-model="lastname" />
        </div>

        <div>
          <label for="firstname">Prenom :</label>
        </div>
        <div>
          <input type="text" id="firstname" v-model="firstname" />
        </div>

        <div>
          <label for="email">E-mail :</label>
        </div>
        <div>
          <input type="email" id="email" v-model="email" />
        </div>

        <div>
          <label for="phone">Téléphone</label>
        </div>
        <div>
          <input type="tel" id="phone" v-model="phone" />
        </div>

        <div>
          <label for="birthday">Date de naissance :</label>
        </div>
        <div>
          <input type="date" id="birthday" placeholder="Date de naissance" v-model="birthday" />
        </div>

        <br />
        <br />

        <button class="boutonSauv" @click="editUser">Sauvegarder</button>

      </div>

      <div v-if="this.success == true">
          <p>Profil modifié avec succès !</p>
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

  props: {
    profilId: String,
  },

  data() {
    return {
      arrayProfil: [],
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      birthday: "",
      today: new Date().toLocaleString(),
      success: false,
      show: false,
    };
  },

  async mounted() {
    const url = `http://127.0.0.1:8000/api/users/${this.profilId}`;

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

    const arrayProfil = data.donnees;
    console.log(arrayProfil);
    this.firstname = arrayProfil[0].firstname;
    this.lastname = arrayProfil[0].lastname;
    this.email = arrayProfil[0].email;
    this.phone = arrayProfil[0].phone;
    this.birthday = arrayProfil[0].birthday;
    
  },
  methods: {
    async editUser() {
      const url =
        `http://127.0.0.1:8000/api/users/${this.profilId}`;

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


      const res = await fetch(url, options);
      console.log(res);
      const datauser = await res.json();
      console.log(datauser);

      this.success = true;
      this.show = false;
    },
  },
};
</script>