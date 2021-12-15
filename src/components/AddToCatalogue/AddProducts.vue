<template>
  <div>
    <p v-if="this.status == 200">Votre produit à bien été ajouté</p>
    <p v-if="this.res == 500">Oups un problème est survenu</p>
  </div>
  <form @submit.prevent="addProduct">
    <div class="top_form">
      <div class="child_top">
        <label for="name">Nom produit</label>
        <input type="text" name="name" id="name" v-model="name" />
      </div>

      <div class="child_top">
        <label for="price">Prix produit</label>
        <input type="number" name="price" id="price" v-model.number="price" />
      </div>
    </div>

    <label for="image">Image</label>
    <input type="file" id="image" @change="uploadImage" name="image" />
    <div class="img_container">
      <img :src="previewImage" class="uploading-image" />
    </div>

    <label for="description">Description produit</label>
    <input
      type="text"
      name="description"
      id="description"
      v-model="description"
    />

    <input type="radio" id="checkbox" name="status" value="on" />
    <label for="checkbox">Produit actif</label>

    <input type="radio" id="checkbox" name="status" value="off" />
    <label for="checkbox">Produit inactif</label>

    <label for="service">Categorie</label>
    <SelectServices />

    <input type="submit" value="Valider" />
  </form>
</template>

<script>
import SelectServices from "../UI/SelectServices.vue";
export default {
  data() {
    return {
      name: "",
      previewImage: null,
      description: "",
      price: "",
      service_id: "",
      checked: "",
      status: "",
      res: "",
      services: "",
    };
  },
  components: {
    SelectServices: SelectServices,
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
    async addProduct(e) {
      const url = "http://127.0.0.1:8000/api/products";

      const options = {
        method: "POST",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("@token"),
        },
        body: new FormData(e.target),
      };
      const response = await fetch(url, options);
      console.log(response);
      this.res = response.status;
      const data = await response.json();
      console.log(data);
      this.status = data.status_code;
    },
  },
};
</script>

<style scoped>
form {
  margin: auto;
}
input {
  width: 200px;
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
  margin-top: 20px;
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
  margin-left: 400px;
}
#submit_btn:hover {
  color: #db9024;
  background: #0f0f0f;
  border: 2px solid #db9024;
  transition: background 1s;
}
</style>