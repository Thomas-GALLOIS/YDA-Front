<template>
  <table class="table table-hover product-table">
    <router-link to="/catalogue/services">Catalogue services</router-link>
    <router-link to="/catalogue/products">Catalogue products</router-link>

    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="type in types" track-by="id" :key="type.id">
        <td>{{ type.categories }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      types: [
        {
          id: "1",
          categorie: "Papille",
        },
        {
          id: "2",
          categorie: "Bien-être",
        },
        {
          id: "3",
          categorie: "Maison",
        },
        {
          id: "4",
          categorie: "Quotidien",
        },
        {
          id: "5",
          categorie: "Coffrets Your Daily",
        },
        {
          id: "6",
          categorie: "Les services de vos assistantes",
        },
      ],
      services: [
        {
          id: "1",
          categories: "Papille",
          name: "La Pause",
          description:
            "Le fait maison s’invite au bureau, La Pause veut vous faire apprécier votre temps de pause déjeuner",
        },
        {
          id: "2",
          categories: "Bien-être",
          name: "Douce mousse",
          description:
            "Douce mousse porte bien son nom, des produits d’une grande qualité et bons pour la peau",
        },
        {
          id: "3",
          categories: "Maison",
          name: "L’abeille qui emballe",
          description:
            "Une astuce mielleuse. Vous consommez trop de cellophane, vous n’avez pas de couvercle pour vos plats. Changez vos pratiques et testez les Bee Wraps.",
        },
        {
          id: "4",
          categories: "Quotidien",
          name: "Pressing du golf",
          description:
            "Un pressing éco-responsable au coeur de Sophia Antipolis, alliant service efficace dans le respect de l’environnement et de la santé",
        },
        {
          id: "5",
          categories: "Coffrets Your Daily",
          name: "Your Daily «care»",
          description:
            "Vous trouverez dans cette rubrique des idées de coffrets/paniers avec les produits d’exception de nos partenaires.",
        },
        {
          id: "6",
          categories: "Les services de vos assistantes",
          name: "Services",
          description:
            "Un ensemble de services pour vous soulager des tâches quotidiennes. Nous vous sélectionnons également les produits de nos partenaires pour vous aider à mieux consommer",
        },
      ],
    };
  },
};
</script>