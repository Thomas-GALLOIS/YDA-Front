<template>
  <NavbarreAdmin />
  <h1>Edition de l'entreprise</h1>
  <span class="green">
    <p v-if="this.success == 200">Edition de l'entreprise réussite</p>
  </span>
  <span class="red">
    <p v-if="this.error == 422">Oups une erreur s'est produite</p>
  </span>

  <div class="form">
    <form @submit.prevent="editFirm">
      <div class="form_p1">
        <div class="form_p2">
          <label for="name">Nom : </label>
          <input type="text" id="name" name="name" v-model="name" />
        </div>

        <div class="form_p2">
          <label for="email">E-mail : </label>
          <input type="email" id="email" name="email" v-model="email" />
        </div>
      </div>

      <div class="form_p1">
        <div class="form_p2">
          <label for="address">Adresse :</label>
          <input type="text" name="address" id="address" v-model="address" />
        </div>

        <div class="form_p2">
          <label for="add_phone">Téléphone : </label>
          <input type="tel" id="add_phone" name="phone" v-model="phone" />
        </div>
      </div>

      <div class="form_p1">
        <div class="form_p2">
          <label for="schedule">Jour et heure 1er passage :</label>
          <input
            type="text"
            name="visit_day_time_1"
            id="schedule"
            v-model="visit_day_time_1"
          />
        </div>

        <div class="form_p2">
          <label for="schedule">Jour et heure 2nd passage :</label>
          <input
            type="text"
            name="visit_day_time_2"
            id="schedule"
            v-model="visit_day_time_2"
          />
        </div>
      </div>

      <div class="form_p1">
        <div class="form_p2">
          <label for="add_siret">Siret :</label>
          <input type="text" name="siret" id="add_siret" v-model="siret" />
        </div>
      </div>

      <div class="form_p1">
        <div class="form_p2">
          <!--
          <label for="logo">Logo :</label>
          <img :src="logoPicture" class="preview" alt="" />
          <input
            type="file"
            @change="downloadLogo"
            name="logo"
            id="logo"
            accept="/*"
            enctype="multipart/form-data"
          />
          -->
        </div>
        <div class="form_p2">
          <label for="add_color">Couleur de l'entreprise : </label>
          <select name="color" id="add_color">
            <option value="color">bleu</option>
          </select>
        </div>
      </div>
      <div>
        <input id="submit_btn" type="submit" value="Valider" />
      </div>
    </form>
  </div>
</template>

<script>
import NavbarreAdmin from "../components/NavbarreAdmin.vue";
export default {
  components: {
    NavbarreAdmin: NavbarreAdmin,
  },
  props: {
    firmId: String,
  },
  data() {
    return {
      id: this.firmId,
      name: "",
      address: "",
      phone: "",
      color: "",
      siret: "",
      subscription: "",
      visit_day_time_1: "",
      visit_day_time_2: "",
      email: "",
      success: "",
      error: "",
    };
  },
  methods: {
    async editFirm() {
      const url = `http://127.0.0.1:8000/api/firms/${this.id}`;

      const options = {
        method: "PUT",
        headers: {
          Authorization: "bearer " + localStorage.getItem("@token"),
          "X-Requested-With": "XMLHttpRequest",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.name,
          address: this.address,
          email: this.email,
          phone: this.phone,
          siret: this.siret,
          subscription: this.subscription,
          visit_day_time_1: this.visit_day_time_1,
          visit_day_time_2: this.visit_day_time_2,
        }),
      };

      const res = await fetch(url, options);
      this.error = res.status;
      console.log(res);
      const data = await res.json();
      console.log(data);
      this.success = data.status_code;
    },
  },
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 600px;
  margin: auto;
  text-align: initial;
}

.form input {
  width: 100%;
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

#submit_btn {
  width: 25%;
  margin-top: 20px;
  color: #0f0f0f;
  background: #db9024;
  cursor: pointer;

  transition: background 1s;
  height: 40px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}
#submit_btn:hover {
  color: #0f0f0f;
  transition: box-shadow 1s;
  box-shadow: inset 3px 3px 3px 2px rgba(0, 0, 0, 0.2);
}

.btn {
  margin: auto;
}

.select {
  margin: auto;
}

.form_p1 {
  display: flex;
  align-items: center;
  gap: 50px;
}

.form_p2 {
  display: flex;
  flex-direction: column;
  align-items: initial;
  width: 40%;
  margin: auto;
  border-radius: 20%;
}

.preview {
  width: 150px;
  height: 150px;
}
.green {
  color: green;
}
.red {
  color: red;
}
</style>