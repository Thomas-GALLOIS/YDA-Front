<template>
  <h1>Products</h1>
  <div v-for="(element, index) in productsArray" :key="index">
    <div
      class="product_card"
      v-for="(value, index) in element.products"
      :key="index"
    >
      <div class="image">
        <img src="https://i.imgur.com/EHDYFaT.jpeg" />
      </div>
      <div class="title_description">
        <h2>{{ value.name }}</h2>
        <p>{{ value.description }}</p>
      </div>

      <div class="buttonedit">
        <button @click="showEdit = !showEdit">Modifier le produit</button>
      </div>

      <div v-show="showEdit">
        <form class="edit_product" @submit.prevent="editProduct(value.id)">
          <label>Nom</label>
          <input type="text" v-model="name" name="name" id="name" />
          <br />
          <div class="img_parent">
            <div class="img_container">
              <label for="image">Image</label>
              <input
                type="file"
                id="image"
                @change="uploadImage"
                name="image"
                class="file"
              />
            </div>
            <br />
            <div class="img_container">
              <img :src="previewImage" class="uploading-image" />
            </div>
          </div>
          <br />
          <label for="description">Description produit</label>
          <input
            type="text"
            name="description"
            id="description"
            v-model="description"
          />
          <br />
          <label for="price">Prix produit</label>
          <input type="number" name="price" id="price" v-model.number="price" />
          <br />
          <input
            type="radio"
            id="checkbox"
            name="status"
            v-model="radio"
            value="actif"
          />
          <label for="checkbox">Produit actif</label>
          <br />
          <input
            type="radio"
            id="checkbox"
            name="status"
            v-model="radio"
            value="inactf"
          />
          {{ name }}
          <label for="checkbox">Produit inactif</label>
          <br />
          <SelectServices />
          <input type="submit" value="valider" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import SelectServices from "../UI/SelectServices.vue";
export default {
  components: {
    SelectServices: SelectServices,
  },
  props: {
    servicesId: String,
  },
  data() {
    return {
      name: "",
      previewImage: null,
      description: "",
      price: "",
      checked: "",
      status: "",
      productsArray: "",
      showEdit: false,
      showModif: true,
      radio: "",
      toto: "",
    };
  },
  async mounted() {
    const url = `http://127.0.0.1:8000/api/services/${this.servicesId}`;

    const options = {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + localStorage.getItem("token"),
      },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    this.productsArray = data.donnees;

    console.log(this.productsArray);
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
    async editProduct(id) {
      console.log(this.toto);
      const url = `http://127.0.0.1:8000/api/products/${id}`;

      const options = {
        method: "PUT",

        headers: {
          "Content-Type": "application/json",
          Authorization: "bearer " + localStorage.getItem("@token"),
          "X-Requested-With": "XMLHttpRequest",
        },
        body: JSON.stringify({
          name: this.name,
          image: this.image,
          description: this.description,
          price: this.price,
          status: this.radio,
          service_id: 1,
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
img {
  width: 15rem;
  height: 15rem;
}

.product_card {
  display: flex;
  justify-content: space-between;
  align-content: space-around;
  align-items: center;
  margin: 5%;
  padding: 1%;
  border: 1px solid #000;
  border-radius: 20px;
  box-shadow: 2px 1px 9px 0px black;
}

.product_card:hover {
  box-shadow: inset 2px 1px 9px 0px black;
}

.image {
  margin-left: 1%;
}

.img_parent {
  margin: auto;
  display: flex;
  gap: 20%;
}
.img_container {
  display: flex;
  flex-direction: column;
}
.img_container img {
  width: 200px;
  height: auto;
  margin: 0px;
}

.title_description {
  margin-left: 5%;
}
.edit_product {
  display: flex;
  flex-direction: column;
  margin-left: 24%;
}
</style>