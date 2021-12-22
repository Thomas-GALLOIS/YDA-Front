<template>
  <div class="product_card">
    <div class="image">
      <img :src="'http://localhost:8000/img/services/' + previewImage" />
    </div>
    <div class="title_description">
      <h2>{{ name }}</h2>
      <p>{{ description }}</p>
      {{ price }}€
      <br />
      <i
        v-if="this.role.value == 'admin'"
        @click="deleteProduct()"
        class="far fa-trash-alt"
      ></i>
    </div>

    <div v-if="this.role.value == 'admin'" class="buttonedit">
      <button @click="showEdit = !showEdit">Modifier le produit</button>
    </div>
    <div class="orders">
      <form class="command_form" @submit.prevent="addProductToCart">
        <label for="comment">Ajoutez un commentaire à votre commande</label>
        <input id="comment" type="text" v-model="comment" />
        <label for="qt">Quantité</label>
        <input id="qt" type="number" v-model="quantity" />
        <input type="submit" value="Commander" @click="global" />
      </form>
    </div>

    <div v-show="showEdit">
      <form class="edit_product" @submit.prevent="editProduct">
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
          value="inactif"
        />

        <label for="checkbox">Produit inactif</label>
        <br />
        <SelectServices />
        <input type="submit" value="valider" />
      </form>
    </div>
  </div>
</template>

<script>
import SelectServices from "../UI/SelectServices.vue";

export default {
  inject: ["role"],
  components: {
    SelectServices: SelectServices,
  },

  props: {
    values: Object,
    addToCart: Function,
  },

  data() {
    return {
      name: this.values.name ?? "",
      previewImage: this.values.image ?? null,
      description: this.values.description ?? "",
      price: this.values.price ?? "",
      showEdit: false,
      showModif: true,
      radio: this.values.status ?? "",
      id: this.values.id,
      quantity: "",
      comment: "",
      globalCart: [],
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
    async editProduct() {
      if (this.role.value == "admin") {
        const url = `http://127.0.0.1:8000/api/products/${this.id}`;

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
            service_id: this.select,
          }),
        };
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
      }
    },
    addProductToCart() {
      this.addToCart({
        comment: this.comment,
        quantity: this.quantity,
        id: this.id,
        name: this.name,
      });
    },

    async deleteProduct() {
      if (this.role.value == "admin") {
        const url = `http://127.0.0.1:8000/api/products/${this.id}`;

        const options = {
          method: "DELETE",

          headers: {
            "Content-Type": "application/json",
            Authorization: "bearer " + localStorage.getItem("token"),
          },
        };
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
      }
    },
  },
};
</script>

<style scoped>
img {
  width: 100px;
}
.command_form {
  display: flex;
  flex-direction: column;
}
.command_form label {
  text-align: left;
  margin: 10px 0;
}
.command_form input {
  height: 30px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  outline: none;
  transition: box-shadow 1.2s;
}
.command_form input:focus {
  box-shadow: inset 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  outline: none;
}
</style>