import { reactive } from "vue";

const store = reactive({
  apiUrl: "http://localhost:3000/cards",
  cards: [],
  modal: {
    show: true,
  },
});

export default store;
