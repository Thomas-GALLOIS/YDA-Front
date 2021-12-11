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
</style>