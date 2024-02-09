<script>
import AppCard from "../components/AppCard.vue";

export default {
  data() {
    return {
      cards: [
        {
          src: "1.webp",
          srcHover: "1b.webp",
          brand: "Levi's",
          productDescription: "RELAXED FIT TEE UNISEX",
          discountPrize: "14,99€",
          originalPrize: "29,99€",
          discountStatus: true,
          discountPercentage: "-50%",
          sostenibility: true,
          isInFavorites: true,
        },
        {
          src: "2.webp",
          scrHover: "2b.webp",
          brand: "Guess",
          productDescription: "ORSES TEE",
          discountPrize: "20,99€",
          originalPrize: "29,99€",
          discountStatus: true,
          discountPercentage: "-30%",
          sostenibility: false,
          isInFavorites: false,
        },
        {
          src: "3.webp",
          scrHover: "3b.webp",
          brand: "Come Zucchero Filato",
          productDescription: "VOLGIA DI COLORI PASTELLO",
          discountPrize: "129,99€",
          originalPrize: "184,99€",
          discountStatus: true,
          discountPercentage: "-30%",
          sostenibility: false,
          isInFavorites: false,
        },
        {
          src: "4.webp",
          scrHover: "4b.webp",
          brand: "Levi's",
          productDescription: "TEE UNISEX",
          discountPrize: "14,99€",
          originalPrize: "29,99€",
          discountStatus: true,
          discountPercentage: "-50%",
          sostenibility: true,
          isInFavorites: true,
        },
        {
          src: "5.webp",
          scrHover: "5b.webp",
          brand: "Maya Deluxe",
          productDescription: "STRIPE BODICE",
          discountPrize: "99,99€",
          originalPrize: "",
          discountStatus: false,
          discountPercentage: "-30%",
          sostenibility: false,
          isInFavorites: false,
        },
        {
          src: "6.webp",
          scrHover: "6b.webp",
          brand: "Esprit",
          productDescription: "MAGLIONE - BLACK",
          discountPrize: "29,99€",
          originalPrize: "",
          discountStatus: false,
          discountPercentage: "",
          sostenibility: true,
          isInFavorites: true,
        },
      ],
    };
  },

  components: { AppCard },
};
</script>

<template>
  <main>
    <div id="product" class="container">
      <AppCard v-for="card in cards" :card="card"></AppCard>
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
