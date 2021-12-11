<template>
  <Navbarre />
  <div class="form_add_service">
    <form @submit.prevent="addService()">
      <div class="inside_form">
        <h1>Ajouter un nouveau service</h1>
        <br />
        <label for="name">Nom</label>

        <input id="name" type="text" v-model="name" />
        <br />
        <br />
        <label for="description">Description</label>

        <textarea id="description" v-model="description"></textarea>
        <br />
        <br />
        <label for="image">Image</label>

        <input type="file" id="image" @change="uploadImage" />
        <br />
        <div class="img_container">
          <img :src="previewImage" class="uploading-image" />
        </div>

        <br />
        <br />
        <label for="email">Email</label>

        <input type="email" id="email" v-model="email" />
        <br />
        <br />
        <label for="telephone">Téléphone</label>

        <input type="tel" id="telephone" v-model="telephone" />
        <br />
        <br />
        <input
          id="submit_btn"
          type="submit"
          value="Ajouter un nouveau service"
        />
      </div>
    </form>
  </div>
  <Footer></Footer>
</template>
<script>
import Footer from "../components/Footer.vue";
import Navbarre from "../components/Navbarre.vue";
export default {
  data() {
    return {
      name: "",
      description: "",
      email: "",
      telephone: "",
      previewImage: null,
    };
  },

  components: {
    Footer,
    Navbarre,
  },

  methods: {
    uploadImage(e) {
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.previewImage = e.target.result;
        console.log(this.previewImage);
      };
    },
    async addService() {
      const url = "localhost";

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name: this.name,
          description: this.description,
          email: this.email,
          telephone: this.telephone,
          image: this.previewImage,
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
.form_add_service {
  width: 100%;
}
form {
  margin: auto;
}
input,
textarea {
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
  width: 30%;
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
.inside_form {
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: auto;
  border-radius: 20%;
}
.img_container img {
  width: 100px;
  margin: 0px;
}
.uploading-image {
  width: 10%;
}
</style>