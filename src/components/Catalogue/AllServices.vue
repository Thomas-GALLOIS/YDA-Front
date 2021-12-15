<template>
  <h1>Services</h1>

  <SelectType v-model="selected" />
  <p>{{ this.selected }}</p>

  <div
    class="service_card"
    v-for="(element, index) in servicesArray"
    :key="index"
    @click="showServiceProducts(element.id)"
  >
    <div class="image">
      <img src="https://i.imgur.com/EHDYFaT.jpeg" />
    </div>
    <div class="title_description">
      <h2>{{ element.name }}</h2>
      <p>{{ element.description_1 }}</p>
    </div>
  </div>
</template>
<script>
import SelectType from "../UI/SelectTypes.vue";

export default {
  data() {
    return {
      servicesArray: "",
      id: "",
      type_id: "",
      selected: "",
    };
  },
  components: {
    SelectType: SelectType,
  },
  async mounted() {
    const url = "http://127.0.0.1:8000/api/services";

    const options = {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + localStorage.getItem("token"),
      },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    //console.log(data);
    this.servicesArray = data.donnees;
    console.log(this.servicesArray);
    this.type_id = data.donnees.type_id;
  },

  methods: {
    async showServiceProducts(id) {
      const url = `http://127.0.0.1:8000/api/services/${id}`;

      const options = {
        method: "GET",

        headers: {
          "Content-Type": "application/json",
          Authorization: "bearer " + localStorage.getItem("token"),
        },
      };
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
      localStorage.setItem("id", id);
      this.$router.push({ name: "CatalogueProducts" });
    },
    /*async filterTypeId(event) {
      const url = `http://127.0.0.1:8000/api/services/${event.target.value}`;
      const options = {
        method: "GET",

        headers: {
          "Content-Type": "application/json",
          Authorization: "bearer " + localStorage.getItem("token"),
        },
      };
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
    },*/
  },
  computed: {
    filterTypeId() {
      console.log(this.selected);
      return this.servicesArray.filter((element) => {
        return element.type_id.includes(this.selected);
      });
    },
  },
};
</script>

<style scoped>
img {
  width: 15rem;
  height: 15rem;
}

.service_card {
  display: flex;
  justify-content: flex-start;
  align-content: space-around;
  align-items: center;
  margin: 5%;
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