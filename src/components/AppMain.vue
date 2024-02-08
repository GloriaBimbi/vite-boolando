<script></script>
<template>
  <main>
    <div id="product" class="container">
      <!--card1-->
      <div class="card">
        <img src="../assets/img/1.webp" alt="" class="product-picture" />
        <div class="overlay">
          <img src="../assets/img/1b.webp" alt="" class="product-picture" />
        </div>
        <span
          >Levi's <br />
          <strong>RELAXED FIT TEE UNISEX</strong> <br /><span
            class="discount-prize"
            >14,99€</span
          >
          <span class="original-prize">29,99€</span>
        </span>
        <span class="discount-percentage">-50%</span>
        <span class="sostenibility">Sostenibilità</span>
        <span class="heart">&hearts;</span>
      </div>
      <!--card2-->
      <div class="card">
        <img src="../assets/img/2.webp" alt="" class="product-picture" />
        <div class="overlay">
          <img src="../assets/img/2b.webp" alt="" class="product-picture" />
        </div>
        <span
          >Levi's <br />
          <strong>RELAXED FIT TEE UNISEX</strong> <br /><span
            class="discount-prize"
            >14,99€</span
          >
          <span class="original-prize">29,99€</span>
        </span>
        <span class="discount-percentage">-30%</span>
        <span class="heart">&hearts;</span>
      </div>
      <!--card3-->
      <div class="card">
        <img src="../assets/img/3.webp" alt="" class="product-picture" />
        <div class="overlay">
          <img src="../assets/img/3b.webp" alt="" class="product-picture" />
        </div>
        <span
          >Levi's <br />
          <strong>RELAXED FIT TEE UNISEX</strong> <br /><span
            class="discount-prize"
            >14,99€</span
          >
          <span class="original-prize">29,99€</span>
        </span>
        <span class="discount-percentage">-30%</span>
        <span class="heart">&hearts;</span>
      </div>
      <!--card4-->
      <div class="card">
        <img src="../assets/img/4.webp" alt="" class="product-picture" />
        <div class="overlay">
          <img src="../assets/img/4b.webp" alt="" class="product-picture" />
        </div>
        <span
          >Levi's <br />
          <strong>RELAXED FIT TEE UNISEX</strong> <br /><span
            class="discount-prize"
            >14,99€</span
          >
          <span class="original-prize">29,99€</span>
        </span>
        <span class="heart">&hearts;</span>
      </div>
      <!--card5-->
      <div class="card">
        <img src="../assets/img/5.webp" alt="" class="product-picture" />
        <div class="overlay">
          <img src="../assets/img/5b.webp" alt="" class="product-picture" />
        </div>
        <span
          >Levi's <br />
          <strong>RELAXED FIT TEE UNISEX</strong> <br /><span
            class="discount-prize"
            >14,99€</span
          >
          <span class="original-prize">29,99€</span>
        </span>
        <span class="sostenibility-solo">Sostenibilità</span>
        <span class="heart">&hearts;</span>
      </div>
      <!--card6-->
      <div class="card">
        <img src="../assets/img/6.webp" alt="" class="product-picture" />
        <div class="overlay">
          <img src="../assets/img/6b.webp" alt="" class="product-picture" />
        </div>
        <span
          >Levi's <br />
          <strong>RELAXED FIT TEE UNISEX</strong> <br /><span
            class="discount-prize"
            >14,99€</span
          >
          <span class="original-prize">29,99€</span>
        </span>
        <span class="discount-percentage">-50%</span>
        <span class="sostenibility">Sostenibilità</span>
        <span class="heart">&hearts;</span>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
#product {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .card {
    margin: 75px 25px;
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
