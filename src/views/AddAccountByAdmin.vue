<template>
    <navbarre></navbarre>

    <p>Selectionez le type de compte que vous souhaitez créer :</p>
    <select name="add_account" id="add_account"></select>
</template>




<script>

import Navbarre from "../components/Navbarre.vue";

export default {
    name:"AddAccount",
    components: {
        Navbarre: Navbarre,
    }
}
</script>