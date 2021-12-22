<template>
  <router-view />
</template>
<script>
import { computed } from "vue";
export default {
  data() {
    return {
      role: "",
    };
  },

  provide() {
    return {
      role: computed(() => this.role),
      setRole: (value) => {
        this.role = value;
      },
    };
  },
};
</script>

<style>

body {
  margin: 0%;
  padding: 0%;
  font-family: "Trebuchet MS";
}
#app {
  font-family: Trebuchet MS, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

::-webkit-scrollbar {
  width: 14px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #db9024;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #0f0f0f;
}
</style>
