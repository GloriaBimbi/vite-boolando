<script>
export default {
  methods: {
    buildImagePath(imageName) {
      return new URL("../assets/img/" + imageName, import.meta.url).href;
    },
    changeStatus(parameter) {
      console.log(parameter);
      parameter = !parameter;
      console.log(parameter);
    },
  },

  props: {
    card: Object,
  },
};
</script>

<template>
  <div class="card">
    <img :src="buildImagePath(card.src)" alt="" class="product-picture" />
    <div class="overlay">
      <img
        :src="buildImagePath(card.srcHover)"
        alt=""
        class="product-picture"
      />
    </div>
    <span
      >{{ card.brand }} <br />
      <strong>{{ card.productDescription }}</strong> <br /><span
        class="discount-prize"
        >{{ card.discountPrize }}</span
      >
      <span class="original-prize">{{ card.originalPrize }}</span>
    </span>
    <span v-show="card.discountStatus" class="discount-percentage">{{
      card.discountPercentage
    }}</span>
    <span v-show="card.sostenibility" class="sostenibility sostenibility-solo"
      >Sostenibilità</span
    >
    <span
      @click="changeStatus(card.isInFavorites)"
      :style="card.isInFavorites == true ? 'color:red;' : ''"
      class="heart"
      >&hearts;</span
    >
  </div>
</template>

<style lang="scss" scoped>
.card {
  margin: 50px 25px;
  width: calc(100% / 3 - 55px);
  min-width: 100px;
  cursor: pointer;
  position: relative;

  &:hover {
    .overlay {
      opacity: 1;
    }
  }

  .product-picture {
    max-width: 100%;
    object-fit: contain;
    display: block;
    margin: 0 auto;
  }

  .discount-prize {
    color: red;
  }

  .original-prize {
    text-decoration: line-through;
  }

  .discount-percentage {
    background-color: red;
    color: white;
    padding: 5px 10px;
    position: absolute;
    bottom: 100px;
    left: 0;
  }

  .sostenibility {
    color: white;
    background-color: green;
    padding: 5px 10px;
    position: absolute;
    bottom: 100px;
    left: 60px;
  }
  .heart {
    color: rgba(0, 0, 0, 0.435);
    background-color: white;
    padding: 10px;
    position: absolute;
    left: 249px;
    bottom: 415px;

    &:hover {
      color: red;
    }
  }
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 80%;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;
  }
}
</style>
