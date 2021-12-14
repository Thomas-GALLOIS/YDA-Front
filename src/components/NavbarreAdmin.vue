<template>
  <div class="nav_admin">
    <div class="nav_primaire">
      <div class="logo">
        <img src="../assets/img/logo_without_title.png" style="width: 158px" />
      </div>
    </div>
    <div class="nav_secondaire">
      <nav>
        <ul>
          <li>

            <router-link to="/creation">Création de compte</router-link>
          </li>
          <li>
            <router-link to="/dashboard">Dashboard</router-link>
          </li>
          <li>
            <router-link to="/">Liste Entreprise</router-link>
          </li>
          <li>
            <router-link to="">Catalogue</router-link>
          </li>
          <li>
            <router-link to="">Agenda</router-link>
          </li>
          <li>
            <router-link to="">Commandes</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  
 
  data() {
    return {
      
    }
  },

  methods: {
    showForm() {
      this.show = 'true';
    }
  }


}
</script>

<style scoped>
body {
  margin: 0px;
}
.nav_primaire {
  background-color: #000000;
  height: 80px;
  text-align: left;
}

.nav_secondaire {
  background-color: #f39c11;
  height: 80px;
  text-align: right;
}

.logo img {
  position: absolute;
  left: 3%;
  top: 0.15%;
}

ul {
  display: flex;
  justify-content: flex-end;
  margin: 0;
}
li {
  list-style: none;
  margin: 30px 15px;
}
a {
  content: "";
  text-decoration: none;
  color: #ffffff;
  margin: 3px 8px;
}

a::before {
  padding: 5px 0;
  margin: 0 8px;
  content: "";
  border-left: 2px solid transparent;
  color: #ffffff;
}
a::after {
  padding: 5px 0;
  margin: 0 8px;
  content: "";
  border-right: 2px solid transparent;
  color: #ffffff;
}
a:hover::before {
  margin: 0 8px;
  content: "";
  animation: btn1 0.5s;
  animation-fill-mode: forwards;
}
a:hover::after {
  margin: 0 8px;
  content: "";
  animation: btn1 0.5s;
  animation-fill-mode: forwards;
}

@keyframes btn1 {
  from {
    margin: 0 8px;
    padding-top: 0px;
    background-color: #ffffff;
    opacity: 1;
  }
  to {
    margin: 0 8px;
    padding-top: 8px;
    background-color: #ffffff;
    opacity: 1;
  }
}
@media (min-width: 1300px) {
  .nav_admin {
    top: 9%;
  }
}
</style>