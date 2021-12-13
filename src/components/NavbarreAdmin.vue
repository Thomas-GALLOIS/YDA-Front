<template>
  <div class="nav_admin">
    <div class="nav_primaire">
      <div class="logo">
        <img src="../assets/img/logo_without_title.png" style="width: 158px" />
      </div>
      <router-link to="/connexion" @click="clearLocalStorage">
        <div class="fav_icon">
          <p>Logout<i class="fas fa-power-off"></i></p>
        </div>
      </router-link>
    </div>
    <div class="nav_secondaire">
      <nav>
        <ul>
          <li>
            <router-link class="anim" to="/creation"
              >Création de compte</router-link
            >
          </li>
          <li>
            <router-link class="anim" to="/dashboard">Dashboard</router-link>
          </li>
          <li>
            <router-link class="anim" to="/">Liste Entreprise</router-link>
          </li>
          <li>
            <router-link class="anim" to="">Catalogue</router-link>
          </li>
          <li>
            <router-link class="anim" to="">Agenda</router-link>
          </li>
          <li>
            <router-link class="anim" to="">Commandes</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    clearLocalStorage() {
      localStorage.clear("@token");
    },
  },
};
</script>
<style scoped>
body {
  margin: 0px;
}
.nav_primaire {
  background-color: #000000;
  height: 80px;
  display: flex;
}
.fav_icon {
  color: white;
  text-align: right;
  position: absolute;
  right: 5%;
  top: 2%;
  font-size: 20px;
}
.fav_icon p i {
  margin-left: 8px;
}

.logo img {
  position: absolute;
  left: 3%;
  top: 0.15%;
}

.nav_secondaire {
  background-color: #f39c11;
  height: 80px;
  text-align: right;
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
.anim {
  content: "";
  text-decoration: none;
  color: #ffffff;
  margin: 3px 8px;
}

.anim::before {
  padding: 5px 0;
  margin: 0 8px;
  content: "";
  border-left: 2px solid transparent;
  color: #ffffff;
}
.anim::after {
  padding: 5px 0;
  margin: 0 8px;
  content: "";
  border-right: 2px solid transparent;
  color: #ffffff;
}
.anim:hover::before {
  margin: 0 8px;
  content: "";
  animation: btn1 0.5s;
  animation-fill-mode: forwards;
}
.anim:hover::after {
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