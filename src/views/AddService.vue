<template>
  <Navbarre />
  <div class="form_add_service">
    <form @submit.prevent="addService()">
      <div class="inside_form">
        <h1>Ajouter un nouveau service</h1>
        <br />
        <label for="name">Nom</label>
        <br />
        <input id="name" type="text" v-model="name" />
        <br />
        <br />
        <label for="description">Description</label>
        <br />
        <textarea id="description" v-model="description"></textarea>
        <br />
        <br />
        <label for="image">Image</label>
        <br />
        <img :src="previewImage" class="uploading-image" />
        <input type="file" id="image" @change="uploadImage" />
        <br />
        <br />
        <label for="email">Email</label>
        <br />
        <input type="email" id="email" v-model="email" />
        <br />
        <br />
        <label for="telephone">Téléphone</label>
        <br />
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
.uploading-image {
  width: 5%;
}
</style>