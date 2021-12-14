<template>

    <!-- import de la barre de navigation -->
    <NavbarreAdmin/>

    <!-- formulaire création de nouveau compte -->
<form @submit.prevent="CreateAccountAdmin">
    <!-- selection du compte à créer -->
    <p>Selectionez le type de compte que vous souhaitez créer :</p>
    <select @change="selectCategoryAccount($event)" name="role" id="add_account" >
        <option value="choix">Choix</option>
        <option value="admin">Admin</option>
        <option value="firm">Entreprise</option>
        <option value="manager">Manager</option>
        <option value="member">Member</option>
    </select>
    <div class="form">
        <div v-if="this.accountSelect == 'admin' || this.accountSelect == 'manager' || this.accountSelect == 'member' || this.accountSelect == 'firm'">
            
                <div class="form_p1">
                    <div class="last_name">
                        <label for="last_name">Nom : </label>
                        <input type="text" id="last_name" name="lastname" v-model="inputLastName" />
                    </div>

                    <div v-if="this.accountSelect != 'firm'" class="first_name">
                        <label for="first_name">Prenom : </label>
                        <input type="text" id="first_name" name="firstname" v-model="inputFirstName" />
                    </div>
                </div>
            
           
            
                <div class="form_p1">
                    <div class="email">
                        <label for="email">E-mail : </label>
                        <input type="email" id="email" name="email" v-model="inputEmail" />
                    </div>
                </div>          

            
        </div>

        <!-- champs spécifiques compte entreprise -->
        <div v-if="this.accountSelect == 'firm'">
                
                <div class="form_p1">
                    <div class="adresse">
                        <label for="adresse">Adresse :</label>
                        <input type="text" name="adresse" id="adresse" v-model="inputAdresse">
                    </div>

                    <div class="phone">
                        <label for="add_phone">Téléphone : </label>
                        <input type="tel" id="add_phone" name="phone" v-model="inputPhone">
                    </div>
                </div>
                
                <div class="form_p1">
                    <div class="siret">
                        <label for="add_siret">Siret :</label>
                        <input type="text" name="siret" id="add_siret" v-model="inputSiret">
                    </div>

                    <div class="Subscription">
                        <label for="add_subscription">Abonnement :</label>
                        <input type="text" name="subscription" id="add_subscription" v-model="inputSubscription">
                    </div>
                </div>

                <div class="form_p1">
                    <div class="logo">
                        <label for="logo">Logo :</label>
                        <img :src="logoPicture" alt="" />
                        <input type="file" @change="downloadLogo" name="logo" id="logo" accept="/*" enctype="multipart/form-data" />
                    </div>

                    <div class="color">
                        <label for="add_color">Couleur de l'entreprise : </label>
                        <select name="color" id="add_color">
                            <option value="color">bleu</option>
                        </select>
                    </div>
                </div>

                
        </div>

        <!-- champs communs comptes manager et member-->
        <div v-if="this.accountSelect == 'manager' || this.accountSelect == 'member'">
                <div class="form_p1">
                    <div class="phone">
                        <label for="add_phone">Téléphone : </label>
                        <input type="tel" id="add_phone" v-model="inputPhone">
                    </div>

                    <div class="firm">
                        <label for="add_firm">Entreprise : </label>
                        <select @change="selectFirm($event)" name="firm_id" id="add_firm">
                            <option value="1">test</option>
                            <option value="2">test2</option>
                        </select>
                    </div>
                </div>
        </div>

        <!-- champs spécifiques compte membre -->
        <div v-if="this.accountSelect == 'member'">
                <div class="part_7">
                <div class="comment">
                    <label for="add_comment">Commentaire :</label>
                    <input type="text" name="add_comment" id="add_comment" v-model="inputComment">
                </div>
                <div class="avatar">
                    <label for="avatar">Avatar :</label>
                    <img :src="avatarPicture" alt="" />
                    <input type="file" @change="downloadAvatar" id="avatar" accept="/*" enctype="multipart/form-data"/>
                </div>
                </div>
        </div>
        <div v-if="accountSelect && this.accountSelect != 'choix'">
                <input class="add_account_button btn btn-primary" type="submit" value="Valider">
        </div>
    </div>
</form>


</template>




<script>


import NavbarreAdminVue from '../components/NavbarreAdmin.vue';

export default {
    name:"AddAccount",
    // component
    components: {
        NavbarreAdmin: NavbarreAdminVue,
    },
    // data properties
    data() {
        return {
            
            inputFirstName: "",
            inputLastName:"",
            inputEmail: "",
            inputPassword: "",
            inputAdresse:"",
            inputPhone: "",
            inputComment: "",
            inputSiret:"",
            inputSubscription:"",
            accountSelect:"",
            firmSelect:"",
            logoPicture:"",
            avatarPicture: "",
            
        };
    },
    // methodes
    methods: {
        
        //Demande asynchronisée permettant la création du compte et l'envoi des données saisies au serveur API
    async CreateAccountAdmin(e) {
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
    },

    // Récupération de la valeur des selects 
    selectCategoryAccount(event) {

            this.accountSelect = event.target.value;

    },
    
    selectFirm(event) {

            this.firmSelect = event.target.value;
            console.log(this.firmSelect);
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
    }
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
    display:flex;
    gap: 30px; 
}

.last_name {
    display: flex;
    flex-direction: column;
}

.first_name  {
    display: flex;
    flex-direction: column;
}

.email  {
    display: flex;
    flex-direction: column;
}

.password {
    display: flex;
    flex-direction: column;
}

.adresse  {
    display: flex;
    flex-direction: column;
}

.phone {
    display: flex;
    flex-direction: column;
}

.siret  {
    display: flex;
    flex-direction: column;
}

.firm  {
    display: flex;
    flex-direction: column;
}

.comment  {
    display: flex;
    flex-direction: column;
}

.subscription  {
    display: flex;
    flex-direction: column;
}

.logo  {
    display: flex;
    flex-direction: column;
}

.avatar  {
    display: flex;
    flex-direction: column;
}


</style>