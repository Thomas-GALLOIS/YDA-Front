<template>
  <div class="nav_admin">
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
</template>

<style scoped>
.nav_admin {
  max-width: 100%;
  position: absolute;
  top: 16%;
  left: 15%;
}
ul {
  display: flex;
  justify-content: flex-end;
}
li {
  list-style: none;
  margin: 0 15px;
}
a {
  border-left: 2px solid transparent;
  border-right: 2px solid transparent;
  text-decoration: none;
  color: #0f0f0f;
  margin: 0 10px;
  padding: 5px 7px;
}

a:hover {
  border-left: 2px solid #0f0f0f;
  border-right: 2px solid #0f0f0f;
  padding: 5px 7px;
  margin: 0 10px;
}
</style>