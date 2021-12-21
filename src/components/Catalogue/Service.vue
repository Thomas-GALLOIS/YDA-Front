<template>
  <div class="service_card">
    <div class="image">
      <img :src="'http://localhost:8000/img/services/' + previewImage" />
    </div>
    <div class="title_description">
      <h2>{{ name }}</h2>
      <p>{{ description_1 }}</p>
      <button @click="showServiceProducts(this.id)">Voir produits</button>
      <br />
      <i
        v-if="this.role.value == 'admin'"
        @click="deleteService()"
        class="far fa-trash-alt"
      ></i>
    </div>

    <div v-if="this.role.value == 'admin'" class="buttonedit">
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
  inject: ["role"],
  components: {
    SelectType: SelectType,
  },

  props: {
    values: Object,
  },
  //watch sur les valeurs des services à afficher pour mettre à jour l'objet values et permettre le filtre par type de bien fonctionner
  watch: {
    values() {
      this.name = this.values.name ?? "";
      this.email = this.values.email ?? "";
      this.phone = this.values.phone ?? "";
      this.categories = this.values.categories ?? "";
      this.previewImage = this.values.image ?? null;
      this.description_1 = this.values.description_1 ?? "";
      this.showEdit = false;
      this.showModif = true;
      this.radio = this.values.status ?? "";
      this.id = this.values.id ?? "";
      this.type = this.values.type_id ?? "";
    },
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
      if (this.role.value == "admin") {
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
      }
    },
    async showServiceProducts(id) {
      this.$router.push({
        name: "CatalogueProducts",
        params: { servicesId: id },
      });
    },
    async deleteService() {
      if (this.role.value == "admin") {
        const url = `http://127.0.0.1:8000/api/services/${this.id}`;

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
        let i = this.servicesArray.map((item) => item.this.id).indexOf(this.id); // find index of your object
        this.servicesArray.splice(i, 1); // remove it from array
      }
    },
  },
};
</script>

<style scoped>
button {
  margin: 2%;
  border-radius: 5px;
  background-color: #ffffff;
  color: black;
}
img {
  width: 10rem;
  height: 10rem;
}

.service_card {
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: space-around;
  align-items: center;
  margin: 1%;
  padding: 1%;
  border: 1px solid black;
  border-radius: 20px;
  box-shadow: 2px 1px 9px 0px black;
}

.service_card:hover {
  box-shadow: inset 2px 1px 9px 0px black;
}

.image {
  margin-left: 1%;
}

.title_description {
  margin-left: 5%;
}
</style>