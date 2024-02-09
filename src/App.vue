<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  data() {
    return {
      linksHeader: [
        {
          url: "#",
          text: "Donna",
        },
        {
          url: "#",
          text: "Uomo",
        },
        {
          url: "#",
          text: "Bambini",
        },
      ],
      linksFooter: [
        {
          url: "#",
          text: "Informazioni legali",
        },
        {
          url: "#",
          text: "Informativa sulla privacy",
        },
        {
          url: "#",
          text: "Diritto di recesso",
        },
      ],
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
          srcHover: "2b.webp",
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
          srcHover: "3b.webp",
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
          srcHover: "4b.webp",
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
          srcHover: "5b.webp",
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
          srcHover: "6b.webp",
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
      socials: [
        {
          url: "#",
          icon: "fa-brands fa-square-twitter icon",
        },
        {
          url: "#",
          icon: "fa-brands fa-square-facebook icon",
        },
        {
          url: "#",
          icon: "fa-brands fa-square-instagram icon",
        },
        {
          url: "#",
          icon: "fa-brands fa-square-pinterest icon",
        },
        {
          url: "#",
          icon: "fa-brands fa-square-pinterest icon",
        },
      ],
    };
  },
  components: { AppHeader, AppMain, AppFooter },
};
</script>

<template>
  <app-header :links="linksHeader"></app-header>
  <app-main :cards="cards"></app-main>
  <app-footer :links="linksFooter" :socials="socials"></app-footer>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
