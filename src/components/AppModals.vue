<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <div class="layover">
    <div class="modal">
      <div class="img-container">
        <img
          src="../assets/img/1.webp"
          alt="immagine del prodotto selezionato"
        />
        <img
          src="../assets/img/1b.webp"
          alt="immagine del prodotto selezionato"
        />
        <div class="tags">
          <span class="discount-percentage"></span>
          <span class="sostenibility"></span>
        </div>
      </div>
      <div class="info-container">
        <h2 class="productDescription">RELAXED FIT TEE UNISEX</h2>
        <hr />
        <h3 class="brand">Levi's</h3>
        <h4>Prima a: <span class="originalPrize">29,99€</span></h4>
        <h4>Ora a: <span class="discountPrize">14,99€</span></h4>
        <h5 class="discountPercentage">-50%</h5>
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
    padding: 30px;

    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 50px;

    .img-container {
      img {
        max-width: 50%;
        max-height: 300px;
        position: relative;
      }
      .tags {
        position: absolute;
        bottom: 160px;
        left: 800px;

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
      .discountPercentage {
        padding: 15px 10px;
        border-radius: 50%;
        background-color: yellow;
        max-width: 50px;
        margin-top: 40px;
      }
    }
  }
}
</style>
