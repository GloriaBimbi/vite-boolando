import { reactive } from "vue";

const store = reactive({
  apiUrl: "http://localhost:3000/cards",
  cards: [],
  modal: {
    show: false,
    id: null,
    src: "",
    srcHover: "",
    brand: "",
    productDescription: "",
    discountPrize: "",
    originalPrize: "",
    discountStatus: true,
    discountPercentage: "",
    sostenibility: true,
    isInFavorites: true,
  },
});

export default store;
