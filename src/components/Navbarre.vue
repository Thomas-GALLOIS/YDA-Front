<template>
  <div class="nav_container">
    <nav>
      <div class="logo">
        <img src="../assets/img/logo_without_title.png" style="width:100px">
      </div>
      <div class="admin_creation">
        <ul>
          <li>
            <router-link to="/admin_creation">Création de compte</router-link>
          </li>
        </ul>
      </div>
      <div class="nav_secondaire">
      </div>
    </nav>
  </div>
</template>

<style scoped>
body {
  margin: 0px;
}
.nav_container {

background-color: #000000;
height: 80px;
text-align: left;

}

.nav_secondaire {
   background-color: #f39c11;
   height: 60px;
   text-align: right;
}

.logo img {
  margin-left: 10px;
  margin-top: 10px;
}

.admin_creation {
  font-family: 'Trebuchet MS';
  
}

.admin_creation ul {
  margin: 0px;
}

.admin_creation li {
  list-style: none;
  position: absolute;
  right: 5%;
}
</style>