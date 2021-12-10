<template>
  <Navbarre />
  <div class="form_connexion">
    <form @submit.prevent="" action="">
      <div class="inside_form">
        <div class="img_container">
          <img src="../assets/img/logo_color.png" alt="" />
        </div>
        <label for="username">Login</label>
        <input id="username" type="email" v-model="email" />

        <label for="password">Password</label>
        <input id="password" type="password" v-model="password" />

        <input id="submit_btn" type="submit" value="Connexion" />
      </div>
    </form>
  </div>
</template>
<script>
import Navbarre from "../components/Navbarre.vue";
export default {
  components: {
    Navbarre: Navbarre,
  },
};
</script>
<style scoped>
.form_connexion {
  width: 100%;
}
form {
  margin: auto;
}

input {
  width: 50%;
  height: 30px;
  margin: 10px auto;
  border: none;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}
label {
  text-align: left;
  margin: auto;
}
#submit_btn {
  width: 25%;
  margin-top: 10px;
  color: #0f0f0f;
  background: #db9024;
  cursor: pointer;
}

.img_container img {
  width: 200px;
}
.inside_form {
  display: flex;
  flex-direction: column;
  border: 3px solid #db9024;
  width: 40%;
  margin: auto;
  border-radius: 5px;
}
</style>