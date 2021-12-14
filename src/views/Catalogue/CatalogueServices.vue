<template>
  <div>
    <div v-for="element in products" :key="element.id">
      <div class="orange">
        <h5>{{ element.categories }}</h5>
        <h1>{{ element.name }}</h1>
      </div>
      <div class="toto">
        <div class="general">
          <p>Instagram:</p>
          <p>Facebook:</p>
        </div>
        <div>
          <h1>Concept</h1>
          <p>{{ element.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
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

<style scoped>
.orange {
  background: linear-gradient(70deg, #db9024, white);
  text-align: left;
  gap: 200px;
  width: 100%;
}
.general {
  height: 700px;
  width: 20%;
  background: linear-gradient(150deg, #db9024, white);
}

.toto {
  display: flex;
}
h1 {
  margin: 0;
}
</style>