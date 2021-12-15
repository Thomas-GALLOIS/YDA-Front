<template>
  <Navbarre />

  <div class="form_initialisation">
    <!--FORM -->
    <form @submit.prevent="initialisation_mdp">

      {{this.idUser}}
      <div class="inside_form">
        <!--PASSWORD -->
        <label for="password">Password</label>
        <input id="password" type="password" required/>
        <!--Confirmation PASSWORD -->
        <label for="confirm">Confirmez votre mot de passe :</label>
        <input id="confirm" type="password" required/>
        <!-- CONNECTION BOUTON -->
        <input id="submit_btn" type="submit" value="Valider" />
      </div>
    </form>
  </div>
  <Footer></Footer>
</template>
<script>
import Footer from "../components/Footer.vue";
import Navbarre from "../components/Navbarre.vue";
export default {
  data() {
    return {
      
      password: "",
      success: "",
      token: localStorage.getItem(`@token`),
      idUser:"",
    };
  },

  components: {
    Footer: Footer,
    Navbarre,
  },

  async mounted() {
  
      const url = "http://127.0.0.1:8000/api/users";
      //Options de la requête API
      const options = {
        method: "GET",
        headers: {
          Authorization: " bearer " + localStorage.getItem(`@token`),
          "content-Type": "application/json",
        },
      };
      // création de la const de réponse qui va chercher les options de l'API
      const response = await fetch(url, options);
      console.log(response);
      // Création de la const data qui nous permet la récupération des data stockées dans l'API
      const data = await response.json();
      console.log(data.status_code);

      const ArrayUsers = data.donnees;
      console.log(ArrayUsers);
  },

  methods: {
    
    //Demande asynchronisée permettant la récupération des identifiants utilisateur via l'API
    async initialisation_mdp(e) {
      const url = "http://127.0.0.1:8000/api";
      //Options de la requête API
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: new FormData(e.target),
      };
      // création de la const de réponse qui va chercher les options de l'API
      const response = await fetch(url, options);
      console.log(response);
      // Création de la const data qui nous permet la récupération des data stockées dans l'API
      const data = await response.json();
      console.log(data);
      this.success = data.status_code;

    },
  },
};
</script>
<style scoped>
.form_connexion {
  width: 100%;
}
form {
  margin: auto;
}
.p_red {
  color: red;
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
label {
  text-align: left;
  margin: auto;
}
#submit_btn {
  width: 25%;
  margin-top: 20px;
  color: #0f0f0f;
  background: #db9024;
  cursor: pointer;

  transition: background 1s;
  height: 40px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}
#submit_btn:hover {
  color: #0f0f0f;
  transition: box-shadow 1s;
  box-shadow: inset 3px 3px 3px 2px rgba(0, 0, 0, 0.2);
}

.img_container img {
  width: 175px;
  margin: 30px;
}
.inside_form {
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: auto;
  border-radius: 20%;
}
</style>