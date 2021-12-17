<template>
  <!-- import de la barre de navigation -->
  <NavbarreAdmin />

  <!-- bouton pour affichage des formulaires -->
  <button @click="showFormAccount()">Création Compte</button><button @click="showFormFirm()">Création d'entreprise</button>
  <!-- formulaire création de nouveau compte -->
  <form v-if="this.showAccount == true" @submit.prevent="CreateAccountByAdmin">
    <!-- selection du compte à créer -->
    <p>Selectionez le type de compte que vous souhaitez créer :</p>
    <select @change="selectCategoryAccount($event)" name="role" id="add_account">
      <option value="choix">Choix</option>
      <option value="admin">Admin</option>
      <option value="manager">Manager</option>
      <option value="member">Member</option>
    </select>

    <div class="form">
        <div v-if=" this.accountSelect == 'admin' || this.accountSelect == 'manager' || this.accountSelect == 'member'">
            <div class="form_p1">
                <div class="form_p2">
                    <label for="last_name">Nom : </label>
                    <input type="text" id="last_name" name="lastname" />
                </div>
           
                <div class="form_p2">
                    <label for="first_name">Prenom : </label>
                    <input type="text" id="first_name" name="firstname" />
                </div>
            </div>
                <div class="form_p2">
                    <label for="email">E-mail : </label>
                    <input type="email" id="email" name="email" v-model="inputEmail" />
                </div>
            </div>

        <!-- champs communs comptes manager et member-->
        <div v-if="this.accountSelect == 'manager' || this.accountSelect == 'member'">
            <div class="form_p1">
                <div class="form_p2">
                    <label for="add_phone">Téléphone : </label>
                    <input type="tel" id="add_phone">
                </div>
                <div class="form_p2">
                    <label for="add_firm">Entreprise : </label>
                    <select @change="selectFirm($event)" @click="FirmChoice" name="firm_id" id="add_firm">
                        <option v-for="(firm, index) in firmList" :key="index" :value="firm.id">{{firm.name}}</option>                      
                    </select>
                </div>
            </div>
        </div>
    

        <!-- champs spécifiques compte membre -->
        <div v-if="this.accountSelect == 'member'">
            <div class="form_p1">
                <div class="form_p2">
                    <label for="add_comment">Commentaire :</label>
                    <input type="text" name="add_comment" id="add_comment">
                </div>
                <div class="form_p2">
                    <label for="avatar">Avatar :</label>
                    <img :src="avatarPicture" class="preview" alt="" />
                    <input type="file" @change="downloadAvatar" id="avatar" accept="/*" enctype="multipart/form-data"/>
                </div>
            </div>
        </div>

        <div v-if="accountSelect && this.accountSelect != 'choix'">
            <input class="add_account_button btn btn-primary" type="submit" value="Valider"/>
        </div>
    </div>
</form>

  <!-- formulaire compte entreprise -->
  <div>
    <div class="form">
      <form v-if="this.showFirmAccount == true" @submit.prevent="CreateAccountFirm">
        <div class="form_p1">
            <div class="form_p2">
                <label for="name">Nom : </label>
                <input type="text" id="name" name="name"/>
            </div>
        
            <div class="form_p2">
                <label for="email">E-mail : </label>
                <input type="email" id="email" name="email" v-model="inputEmail"/>
            </div>
        </div>
        
        <div class="form_p1">
          <div class="form_p2">
            <label for="address">Adresse :</label>
            <input type="text" name="address" id="address" />
          </div>

          <div class="form_p2">
            <label for="add_phone">Téléphone : </label>
            <input type="tel" id="add_phone" name="phone" />
          </div>
        </div>

        <div class="form_p1">
            <div class="form_p2">
                <label for="schedule">Jour et heure 1er passage :</label>
                <input type="text" name="visit_day_time_1" id="schedule">
            </div>

            <div class="form_p2">
                <label for="schedule">Jour et heure 2nd passage :</label>
                <input type="text" name="visit_day_time_2" id="schedule">
            </div>
        </div>

        <div class="form_p1">
            <div class="form_p2">
                <label for="add_siret">Siret :</label>
                <input type="text" name="siret" id="add_siret">
            </div>
            <div class="form_p2">
                <label for="add_subscription">Abonnement :</label>
                <input type="text" name="subscription" id="add_subscription">
            </div>
        </div>

        <div class="form_p1">
          <div class="form_p2">
            <label for="logo">Logo :</label>
            <img  :src="logoPicture" class="preview" alt="" />
            <input
              type="file"
              @change="downloadLogo"
              name="logo"
              id="logo"
              accept="/*"
              enctype="multipart/form-data"
            />
          </div>
          <div class="form_p2">
            <label for="add_color">Couleur de l'entreprise : </label>
            <select name="color" id="add_color">
              <option value="color">bleu</option>
            </select>
          </div>
        </div>
        <div>
            <input class="add_account_button" type="submit" value="Valider" />
          </div>
      </form>
    </div>
  </div>
</template>




<script>
import NavbarreAdmin from "../components/NavbarreAdmin.vue";

export default {
    name:"AddAccount",
    // component
    components: {
        NavbarreAdmin: NavbarreAdmin,
    },
    // data properties
    data() {
        return {
           
            inputEmail: "",
            accountSelect:"",
            firmSelect:"",
            logoPicture:"",
            avatarPicture: "",
            showAccount: false,
            showFirmAccount: false,
            firmList:"",
            
        };
    },
    // methodes
    methods: {
        
    //Demande asynchronisée permettant la création du compte et l'envoi des données saisies au serveur API
    async CreateAccountByAdmin(e) {
      const url = "http://127.0.0.1:8000/api/inscription";
      //Options de la requête API
      const options = {
        method: "POST",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("@token"),
        },
        body: new FormData(e.target),
      };
      // va chercher les options de l'API
      const response = await fetch(url, options);
      console.log(response);
      // la récupération des data stockées dans l'API
      const data = await response.json();
      console.log(data);

      const urlMagicLink= "http://127.0.0.1:8000/api/login";

        const optionsMagicLink = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("@token"),
            },

            body: JSON.stringify ({
              email: this.inputEmail
            }),
        };

        const responseMagicLink = await fetch(urlMagicLink, optionsMagicLink);

        const dataMagicLink = await responseMagicLink.json();
        console.log(dataMagicLink);
    },

    //Demande asynchronisée permettant la création du compte et l'envoi des données saisies au serveur API
    async CreateAccountFirm(e) {
      const url = "http://127.0.0.1:8000/api/firms";
      //Options de la requête API
      const options = {
        method: "POST",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("@token"),
        },
        body: new FormData(e.target),
      };
      // va chercher les options de l'API
      const response = await fetch(url, options);
      console.log(response);
      // la récupération des data stockées dans l'API
      const data = await response.json();
      console.log(data);
     
    },

    async FirmChoice () {

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

      this.firmList = data;
      console.log(this.firmList); 
    },

    // Récupération de la valeur des selects
    selectCategoryAccount(event) {
      this.accountSelect = event.target.value;
    },

    selectFirm(event) {
      this.firmSelect = event.target.value;
      console.log(this.firmSelect);
    },

    // methodes affichant les différents formulaires
    showFormAccount() {
      if (this.showAccount == false) {
        this.showAccount = true;
        this.showFirmAccount = false;
      }
    },

    showFormFirm() {
      if (this.showFirmAccount == false) {
        this.showFirmAccount = true;
        this.showAccount = false;
      }
    },

    // Chargement des images
    downloadLogo(e) {
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.logoPicture = e.target.result;
        console.log(this.logoPicture);
      };
    },

    downloadAvatar(e) {
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.avatarPicture = e.target.result;
        console.log(this.avatarPicture);
      };
    },
  },
};
</script>

<style>
.form {
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 500px;
  margin: auto;
  text-align: initial;
  justify-content: space-evenly;
}

.form input {
  width: 200px;
  margin-bottom: 20px;
}

.form_p1 {
  display: flex;
  align-items: center;
  gap: 50px;
}

.form_p2 {
  display: flex;
  flex-direction: column;
  align-items: initial;
}



.preview {
    width: 150px;
    height: 150px;
}
</style>