<template>

    <!-- import de la barre de navigation -->
    <navbarre></navbarre>

    <!-- selection du compte à créer -->
    <p>Selectionez le type de compte que vous souhaitez créer :</p>
    <select @change="selectCategory($event)" name="add_account" id="add_account" >
        <option value="choix">Choix</option>
        <option value="admin">Admin</option>
        <option value="manager">Manager</option>
        <option value="member">Member</option>
    </select>
    <div class="form">

    <!-- formulaire création de nouveau compte -->
    <form @submit.prevent="CreateAccountAdmin()">
        <div v-if="this.accountSelect == 'admin' || this.accountSelect == 'manager' || this.accountSelect == 'member'">
            <div class="first_name">
                <label for="first_name">Prenom : </label>
                <input type="text" id="first_name" v-model="inputFirstName" />
            </div>
           
            <div class="last_name">
                <label for="last_name">Nom : </label>
                <input type="text" id="last_name" v-model="inputLastName" />
            </div>
           
            <div class="email">
                <label for="email">E-mail : </label>
                <input type="text" id="email" v-model="inputEmail" />
            </div>          
        
            <div class="password">
                <label for="password">Password : </label>
                <input type="password" id="password" v-model="inputPassword">
            </div>

            
        </div>
        <div v-if="this.accountSelect == 'manager'">
                <div class="phone">
                    <label for="add_phone">Téléphone : </label>
                    <input type="tel" id="add_phone" v-model="inputPhone">
                </div>

                <div class="firm">
                    <label for="add_firm">Entreprise : </label>
                    <select name="add_firm" id="add_firm">
                        <option value=""></option>
                    </select>
                </div>
        </div>

        <div v-if="this.accountSelect == 'member'">
                <div class="phone">
                    <label for="add_phone">Téléphone : </label>
                    <input type="tel" id="add_phone" v-model="inputPhone">
                </div>

                <div class="firm">
                    <label for="add_firm">Entreprise : </label>
                    <select name="add_firm" id="add_firm">
                        <option value=""></option>
                    </select>
                </div>
                <div class="comment">
                    <label for="add_comment">Commentaire</label>
                    <input type="text" name="add_comment" id="add_comment" v-model="inputComment">
                </div>
        </div>
        <div v-if="accountSelect && this.accountSelect != 'choix'">
                <input class="add_account_button btn btn-primary" type="submit" value="Valider">
        </div>
    </form>
    </div>

</template>




<script>

import Navbarre from "../components/Navbarre.vue";

export default {
    name:"AddAccount",
    // component
    components: {
        Navbarre: Navbarre,
    },
    // data properties
    data() {
        return {
            inputFirstName: "",
            inputLastName:"",
            inputEmail: "",
            inputPassword: "",
            inputPhone: "",
            inputComment: "",
            accountSelect:"",
            firmSelect:"",
            avatar: "",
            
        };
    },
    // methodes
    methods: {
        
        //Demande asynchronisée permettant l'inscription de l'utilisateur et l'envoi des données saisies au serveur API
    async CreateAccountAdmin() {
      const url = "localhost";
      //Options de la requête API
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Ne pas oublier de stringify
        body: JSON.stringify({
          firstname: this.inputFirstName,
          lastname: this.inputLastName,
          email: this.inputEmail,
          password: this.inputPassword,
          phone: this.inputPhone,
          comments: this.inputComment,
          avatar: this.avatar,
        }),
      };
      // va chercher les options de l'API
      const response = await fetch(url, options);
      console.log(response);
      // la récupération des data stockées dans l'API
      const data = await response.json();
      console.log(data);
      
        
    },

    selectCategory(event) {

            this.accountSelect = event.target.value;
    },
    },
};
</script>

<style>

.form {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 500px;
    width: 220px;
    margin-left: 45%;
    text-align: initial;
    justify-content: space-evenly;
}

.form input {
    width: 200px;
    margin-bottom: 20px;
}
</style>