<template>
  <form @submit.prevent="addProduct">
    <label for="name">Nom produit</label>
    <input type="text" name="name" id="name" v-model="name" />

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

    <label for="price">Prix produit</label>
    <input type="number" name="price" id="price" v-model.number="price" />

    <input type="radio" id="checkbox" name="status" value="on" />
    <label for="checkbox">Produit actif</label>

    <input type="radio" id="checkbox" name="status" value="off" />
    <label for="checkbox">Produit inactif</label>

    <label for="service">Categorie</label>
    <select name="service_id" id="service">
      <option value="1">Pour les papilles</option>
    </select>

    <input type="submit" value="Valider" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      previewImage: null,
      description: "",
      price: "",
      service_id: "",
      checked: "",
    };
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

      const data = await response.json();
      console.log(data);
    },
  },
};
</script>