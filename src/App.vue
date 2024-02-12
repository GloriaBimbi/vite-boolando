<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
import axios from "axios";
import store from "./store/index";

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
      store,
      cards: [],
    };
  },
  created() {
    this.fetchCards();
  },
  methods: {
    fetchCards() {
      axios.get(this.store.apiUrl).then((res) => {
        this.cards = res.data;
        console.log(res.data);
      });
    },
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
