<template>
  <div class="about">
    <h1>This is an about page</h1>

    <Agenda />
  </div>
</template>
<script>
import Agenda from "../components/Agendas/Agenda.vue";
import { Kalendar } from "kalendar-vue";

export default {
  components: {
    Agenda: Agenda,
    Kalendar,
  },
  data() {},
};
</script>
  

