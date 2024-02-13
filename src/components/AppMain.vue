<script>
import AppCard from "./AppCard.vue";
import store from "../store/index";

export default {
  data() {
    return {
      store,
    };
  },

  components: { AppCard },

  methods: {
    handleModelOpening(productIndex) {
      //salvo una costante che faccia riferimento al pordotto selezionato per evitare di riscriverlo tutte le volte
      const selectedCard = store.cards[productIndex];
      //controllo che l'indice esista e nel caso collego la modale cliccata con le sue chiavi nello store
      if (productIndex) {
        store.modal.src = selectedCard.src;
        store.modal.srcHover = selectedCard.srcHover;
        store.modal.brand = selectedCard.brand;
        store.modal.productDescription = selectedCard.productDescription;
        store.modal.discountPrize = selectedCard.discountPrize;
        store.modal.originalPrize = selectedCard.originalPrize;
        store.modal.discountStatus = selectedCard.discountStatus;
        store.modal.discountPercentage = selectedCard.discountPercentage;
        store.modal.sostenibility = selectedCard.sostenibility;
        store.modal.isInFavorites = selectedCard.isInFavorites;
        store.modal.id = selectedCard.id;
        //faccio in modo che cliccando su una card si apra la modale
        store.modal.show = true;
      }
    },
  },
};
</script>

<template>
  <main>
    <div id="product" class="container">
      <app-card
        v-for="(card, index) in store.cards"
        :card="card"
        :index="index"
        @open-model="handleModelOpening"
      ></app-card>
    </div>
  </main>
</template>

<style lang="scss" scoped>
#product {
  padding: 25px 0;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
