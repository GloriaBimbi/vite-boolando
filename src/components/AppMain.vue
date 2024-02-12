<script>
import AppCard from "../components/AppCard.vue";
import store from "../store/index";

export default {
  data() {
    return {
      store,
    };
  },
  components: { AppCard },
};
</script>

<template>
  <main>
    <div id="product" class="container">
      <app-card
        v-for="(card, index) in store.cards"
        :card="card"
        :index="index"
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
