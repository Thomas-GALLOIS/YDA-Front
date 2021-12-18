<template>
  <div class="service_card">
    <div class="image">
      <img :src="'http://localhost:8000/img/services/' + previewImage" />
    </div>
    <div class="title_description">
      <h2>{{ name }}</h2>
      <p>{{ description_1 }}</p>
      <button @click="showServiceProducts(this.id)">Voir produits</button>
    </div>

    <div class="buttonedit">
      <button @click="showEdit = !showEdit">Modifier le service</button>
    </div>

    <div v-show="showEdit">
      <form class="edit_service" @submit.prevent="editService">
        <label for="name">Nom</label>
        <input id="name" type="text" v-model="name" name="name" />
        <div class="child_top">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" name="email" />
        </div>
        <div class="mid_form">
          <div class="child_mid">
            <label for="phone">Téléphone</label>

            <input type="tel" id="phone" name="phone" v-model="phone" />
          </div>
          <div class="child_mid">
            <label for="categories">Categorie</label>
            <SelectType />
          </div>
        </div>
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

          <div class="img_container">
            <img :src="previewImage" class="uploading-image" />
          </div>
        </div>
        <div class="bot_container">
          <div class="child_bot">
            <input
              type="radio"
              id="checkbox"
              class="check"
              name="status"
              value="actif"
            />
            <label for="checkbox">Produit actif</label>
          </div>

          <div class="child_bot">
            <input
              type="radio"
              id="checkbox"
              class="check"
              name="status"
              value="inactif"
            />
            <label for="checkbox">Produit inactif</label>
          </div>
        </div>
        <div class="text_container">
          <label for="description_1">Description</label>
          <textarea
            id="description_1"
            v-model="description_1"
            name="description_1"
            class="block_area"
          ></textarea>
        </div>

        <input
          id="submit_btn"
          type="submit"
          value="Ajouter un nouveau service"
        />
      </form>
    </div>
  </div>
</template>

<script>
import SelectType from "../UI/SelectTypes.vue";

export default {
  components: {
    SelectType: SelectType,
  },

  props: {
    values: Object,
  },

  data() {
    return {
      name: this.values.name ?? "",
      email: this.values.email ?? "",
      phone: this.values.phone ?? "",
      categories: this.values.categories ?? "",
      previewImage: this.values.image ?? null,
      description_1: this.values.description_1 ?? "",
      showEdit: false,
      showModif: true,
      radio: this.values.status ?? "",
      id: this.values.id ?? "",
      type: this.values.type_id ?? "",
    };
  },

  methods: {
    uploadImage(e) {
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.previewImage = e.target.result;
      };
    },
    async editService() {
      const url = `http://127.0.0.1:8000/api/services/${this.id}`;

      const options = {
        method: "PUT",

        headers: {
          "Content-Type": "application/json",
          Authorization: "bearer " + localStorage.getItem("@token"),
        },
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          phone: this.phone,
          image: this.image,
          description_1: this.description_1,
          status: this.radio,
          type_id: this.select,
        }),
      };
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
    },
    async showServiceProducts(id) {
      this.$router.replace({
        name: "CatalogueProducts",
        params: { servicesId: id },
      });
    },
  },
};
</script>

<style scoped>
img {
  width: 100px;
}
</style>