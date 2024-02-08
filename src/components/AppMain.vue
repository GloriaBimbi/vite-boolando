<script>
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
        },
      ],
    };
  },

  methods: {
    buildImagePath(imageName) {
      return new URL("../assets/img/" + imageName, import.meta.url).href;
    },
  },
};
</script>

<template>
  <main>
    <div id="product" class="container">
      <div v-for="card in cards" class="card">
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
        <span v-show="card.sostenibility" class="sostenibility"
          >Sostenibilità</span
        >
        <span class="heart">&hearts;</span>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
#product {
  padding: 25px 0;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .card {
    margin: 50px 25px;
    width: calc(100% / 3 - 55px);
    min-width: 100px;
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

    .sostenibility-solo {
      color: white;
      background-color: green;
      padding: 5px 10px;
      position: absolute;
      bottom: 100px;
      left: 0;
    }
    .heart {
      color: black;
      background-color: white;
      padding: 10px;
      position: relative;
      left: 154px;
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
}
</style>
