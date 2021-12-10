<template>
  <div class="form_connexion">
    <form @submit.prevent="connectUser()">
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
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    async connectUser() {
      const url = "localhost";

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
      };
      const response = await fetch(url, options);
      console.log(response);

      const data = await response.json();
      console.log(data);
    },
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
  margin: 15px auto;
  border: none;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  outline: none;
  transition: box-shadow 1.2s;
}
input:focus {
  box-shadow: inset 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  outline: none;
}
label {
  text-align: left;
  margin: auto;
}
#submit_btn {
  width: 25%;
  margin-top: 20px;
  color: #0f0f0f;
  background: #db9024;
  cursor: pointer;
  border: 2px solid #0f0f0f;
  transition: background 1s;
  height: 40px;
}
#submit_btn:hover {
  color: #db9024;
  background: #0f0f0f;
  border: 2px solid #db9024;
  transition: background 1s;
}

.img_container img {
  width: 175px;
  margin: 30px;
}
.inside_form {
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: auto;
  border-radius: 20%;
}
</style>