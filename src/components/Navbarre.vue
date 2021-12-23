<template>
  <!--Component NavBarre réutilisable de partout-->
  <div>
    <div class="nav_primaire">
      <div class="logo">
        <img src="../assets/img/images.png" style="width: 200px" />
      </div>
      <router-link to="/connexion" @click="clearLocalStorage">
        <div class="fav_icon">
          <i class="fas fa-power-off"></i>
        </div>
      </router-link>
    </div>
    <div class="nav_secondaire">
      <nav>
        <ul>
          <li>
            <router-link class="anim" to="/DashMember"
              >Mes commandes</router-link
            >
          </li>

          <li>
            <router-link class="anim" to="/catalogue/services"
              >Catalogue</router-link
            >
          </li>

          <li>
            <router-link class="anim" to="/EditProfilMember"
              >Mon profil</router-link
            >
          </li>
          <li>
            <router-link class="anim" to="/panier"
              ><i class="fas fa-shopping-cart"></i
            ></router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
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
  background-color: #cccfd4;
  height: 65px;
  text-align: left;
}

.nav_secondaire {
  background-color: #2483db;
  height: 65px;
  text-align: right;
}

.logo img {
  position: absolute;
  left: 3%;
  top: 2%;
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
.fav_icon {
  color: white;
  text-align: right;
  position: absolute;
  right: 5%;
  top: 3%;
  font-size: 20px;
}
</style>