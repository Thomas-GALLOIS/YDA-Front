<template>
  <div class="form_add_service">
    <div>
      <p v-if="this.status == 200">Votre Service à bien été crée</p>
      <p v-if="this.res == 500">Oups un problème est survenu</p>
    </div>
    <form @submit.prevent="addService">
      <div class="inside_form">
        <h1>Ajouter un nouveau service</h1>

        <label for="name">Nom</label>

        <input id="name" type="text" v-model="name" name="name" />

        <label for="description_1">Description</label>
        <textarea
          id="description_1"
          v-model="description_1"
          name="description_1"
        ></textarea>

        <label for="categories">Categorie</label>
        <select name="type_id" id="categories">
          <option value="1">Pour les papilles</option>
          <option value="2">Pour le bien-être</option>
          <option value="3">Pour la maison</option>
          <option value="4">Pour le quotidien</option>
          <option value="5">Les idées Coffrets Your Daily</option>
          <option value="6">Les services de vos assistantes</option>
          <option value="7">Autres</option>
        </select>

        <label for="image">Image</label>

        <input type="file" id="image" @change="uploadImage" name="image" />

        <div class="img_container">
          <img :src="previewImage" class="uploading-image" />
        </div>

        <input type="radio" id="checkbox" name="status" value="on" />
        <label for="checkbox">Produit actif</label>

        <input type="radio" id="checkbox" name="status" value="off" />
        <label for="checkbox">Produit inactif</label>

        <label for="email">Email</label>

        <input type="email" id="email" v-model="email" name="email" />

        <label for="phone">Téléphone</label>

        <input type="tel" id="phone" name="phone" v-model="phone" />

        <input
          id="submit_btn"
          type="submit"
          value="Ajouter un nouveau service"
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      description_1: "",
      email: "",
      phone: "",
      type_id: "",
      previewImage: null,

      status: "",
      res: "",
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
    async addService(e) {
      const url = "http://127.0.0.1:8000/api/services";

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
select {
  width: 50%;
  margin-left: 25%;
  /* margin-right: 0%; */
}
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