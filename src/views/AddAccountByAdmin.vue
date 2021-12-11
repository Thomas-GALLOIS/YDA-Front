<template>

    <!-- import de la barre de navigation -->
    <navbarre></navbarre>

    <!-- selection du compte à créer -->
    <p>Selectionez le type de compte que vous souhaitez créer :</p>
    <select @change="selectCategory($event)" name="add_account" id="add_account" >
        <option value="admin">Admin</option>
        <option value="manager">Manager</option>
        <option value="member">Member</option>
    </select>

    <!-- formulaire création de nouveau compte -->
    <form class="form_admin">
        <div class="admin_form">
            <label for="prenom">Prenom : </label>
            <input type="text" id="lastName" v-model="inputPrenom" />
            <!-- FIRST NAME -->
            <label for="nom">Nom : </label>
            <input type="text" id="firstName" v-model="inputNom" />
            <!-- EMAIL -->
            <label for="email">E-mail : </label>
            <input type="text" id="email" v-model="inputEmail" />
            <!-- PASSWORD -->
            <label for="password">Password : </label>
            <input type="password" id="password" v-model="inputPassword">
        </div>

        <div v-if="this.event == 'manager'">
            <div class="telephone">
                <label for="telephone">Téléphone : </label>
                <input type="tel" id="telephone" v-model="inputTelephone">
            </div>
            <div class="firm">
                <label for="firm">Entreprise : </label>
                <select name="add_firm" id="add_firm">
                    <option value=""></option>
                </select>
            </div>
        </div>




          <input class="add_account_button" type="submit" value="Valider">
    </form>
</template>




<script>

import Navbarre from "../components/Navbarre.vue";

export default {
    name:"AddAccount",
    components: {
        Navbarre: Navbarre,
    },

    data() {
        return {
            inputPrenom: "",
            inputNom:"",
            inputEmail: "",
            inputPassword: "",
            inputTelephone: "",
            event:"",
            
        };
    },

    methods: {
        selectCategory(event) {

            const toto = event.target.value;
            this.event = toto;
            
            console.log(this.event);

        }
        
    }
}
</script>

<style>
.form_admin {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.form_admin input {
    width: 200px;
}
</style>