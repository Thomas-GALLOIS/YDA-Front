<template>
    <!-- composant barre de navigation -->
    <NavbarreAdmin/>
    <h2>Listes des utilisateurs</h2>

<div class="arrayUsers">
<table class="array">
    <thead class="head">
        <tr class="trHead">
            <th>Nom :</th>
        
            <th>Prenom :</th>
       
            <th>Date de naissance :</th>
       
            <th>E-mail :</th>
       
            <th>Téléphone :</th>
        
            <th>Role :</th>
      
            <th>Commentaire :</th>

            <th>Action :</th>
        </tr>
    </thead>

    <!-- affichage de tous les utilisateurs -->
  
        <tbody v-for="(user, index) in arrayUsers" :key="index" class="body">  
            <tr >
                <td>{{user.firstname}}</td>
           
                <td>{{user.lastname}}</td>
           
                <td>{{user.birthday}}</td>
          
                <td>{{user.email}}</td>
       
                <td>{{user.phone}}</td>
         
                <td>{{user.role}}</td>
         
                <td>{{user.comments}}</td>

                <button>Modifier</button>
                <button @click="deleteUser">Supprimer</button>
            </tr>
        </tbody>
        
</table>

</div>
</template>

<script>

import NavbarreAdmin from "../components/NavbarreAdmin.vue";

export default {
    components: {
        NavbarreAdmin: NavbarreAdmin,
    },

    data() {
        return {
            arrayUsers: [],
        }
    },

    async mounted () {
            /*requete pour récuperer au montage tout les entreprises en BDD*/
    const url = "http://127.0.0.1:8000/api/users";
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

    this.arrayUsers = data.donnees;
    
  },

  async deleteUser () {

      const url = `http://127.0.0.1:8000/api/users/${this.userId}`;
    //Options de la requête API
    const options = {
      method: "DELETE",
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
  }
};
    

</script>

<style scoped>

.arrayUsers .array {
  border: 1px solid #bdc3d7;
  text-align: center;
  vertical-align: middle;
  /* position: absolute;
  left: 50%;
  top: 150%;
  transform: translate(-50%, -50%); */
  border-collapse: collapse;
  width: 100%;
  height: 200px;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2), -1px -1px 8px rgba(0, 0, 0, 0.2);
}

.array tr {
    background-color: #f39c11;
  transition: all 0.2s ease-in;
  background-color: #fff;
  cursor: pointer;
}

.array th,
td {
  padding: 12px;
  border-bottom: 1px solid #ddd;
}

.array .trHead {
  background-color: #f39c11;
  font-weight: bold;
  color: #fff;
}

tr:hover {
  background-color: #f5f5f5;
  transform: scale(1.02);
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2), -1px -1px 8px rgba(0, 0, 0, 0.2);
}

</style>