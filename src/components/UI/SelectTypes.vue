 <template>
  <select name="type_id" id="categories">
    <option v-for="(element, index) in type" :key="index" :value="element.id">
      {{ element.name }}
    </option>
  </select>
</template>

<script>
export default {
  data() {
    return {
      type: "",
    };
  },
  async mounted() {
    const url = "http://127.0.0.1:8000/api/types";

    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(url, options);
    console.log(response);

    const data = await response.json();
    console.log(data);
    this.type = data.donnees;
  },
};
</script>
 