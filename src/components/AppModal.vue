<script>
import store from "../store/index";
export default {
  data() {
    return {
      counter: 0,
      store,
    };
  },
  methods: {
    addToCart() {
      alert("Hai aggiunto questo prodotto al carrello");
      store.counter++;
    },
    closeModal() {
      store.modal.show = false;
    },
    buildImagePath(imageName) {
      return new URL("../assets/img/" + imageName, import.meta.url).href;
    },
  },
};
</script>

<template>
  <div class="layover">
    <div class="modal">
      <div class="img-container">
        <img
          :src="buildImagePath(store.modal.src)"
          alt="immagine del prodotto selezionato"
        />
        <img
          :src="buildImagePath(store.modal.srcHover)"
          alt="immagine del prodotto selezionato"
        />
        <div class="tags">
          <span
            v-if="store.modal.discountPercentage"
            class="discount-percentage"
            >{{ store.modal.discountPercentage }}</span
          >
          <span v-if="store.modal.sostenibility" class="sostenibility"
            >Sostenibilità</span
          >
        </div>
      </div>
      <div class="info-container">
        <h2 class="productDescription">{{ store.modal.productDescription }}</h2>
        <hr />
        <h3 class="brand">{{ store.modal.brand }}</h3>
        <h4 v-if="store.modal.originalPrize">
          Prima a:
          <span class="originalPrize">{{ store.modal.originalPrize }}</span>
        </h4>
        <h4>
          Ora a:
          <span class="discountPrize">{{ store.modal.discountPrize }}</span>
        </h4>
      </div>
      <div class="active-icons">
        <i class="fa-solid fa-cart-shopping add-to-cart" @click="addToCart()">
          <span class="cart-counter">{{ store.counter }}</span></i
        >
        <i class="fa-solid fa-x close-modal" @click="closeModal()"></i>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layover {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  color: rgb(62, 62, 62);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .modal {
    width: 80%;
    max-width: 760px;
    background-color: white;
    padding: 1rem;
    border-radius: 1rem;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 50px;

    .close-modal {
      color: rgb(62, 62, 62);
      border: 1px solid rgb(62, 62, 62);
      padding: 10px 12px;
      top: -30px;
      right: -10px;
    }

    .add-to-cart {
      color: rgb(39, 152, 244);
      background-color: rgba(110, 179, 235, 0.412);
      border: 1px solid rgb(39, 152, 244);
      padding: 10px;
      position: relative;

      top: 8px;
      right: 50px;

      .cart-counter {
        color: rgb(76, 205, 72);
        position: relative;
        top: 5px;
        left: 5px;
      }
    }

    .close-modal,
    .add-to-cart {
      border-radius: 0.2rem;
      position: relative;
    }
    .img-container {
      img {
        max-width: 50%;
        height: 350px;
        object-fit: cover;
      }
      .tags {
        position: absolute;
        bottom: 30px;
        right: 30px;

        .discount-percentage {
          background-color: red;
          color: white;
          padding: 5px 10px;
          margin-right: 5px;
        }

        .sostenibility {
          color: white;
          background-color: green;
          padding: 5px 10px;
        }
      }
    }
    .info-container {
      padding-top: 50px;
      width: 500px;
      height: 350px;

      .productDescription {
        font-size: 20px;
      }

      .productDescription,
      .brand,
      .discountPercentage {
        padding: 20px 0;
      }
      .originalPrize {
        text-decoration: line-through;
        color: red;
      }
      .discountPrize {
        color: green;
      }
      h4 {
        padding: 5px 0;
      }
    }
  }
}
</style>
