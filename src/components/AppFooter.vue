<script></script>
<template>
  <footer>
    <div class="container footer__wrapper">
      <div id="general-info">
        <span class="brand"><strong>Booleando s.r.l.</strong></span>
        <div class="nav">
          <a href="#" class="header__link">Informazioni legali</a>
          <a href="#" class="header__link">Informativa sulla privacy</a>
          <a href="#" class="header__link">Diritto di recesso</a>
        </div>
      </div>
      <div class="social-media-contacts">
        Trovaci anche su <br />
        <i class="fa-brands fa-square-twitter icon"></i>
        <i class="fa-brands fa-square-facebook icon"></i>
        <i class="fa-brands fa-square-instagram icon"></i>
        <i class="fa-brands fa-square-pinterest icon"></i>
        <i class="fa-brands fa-square-youtube icon"></i>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
footer {
  color: white;
  background-color: black;
  padding: 20px;

  .footer__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .brand {
      padding-left: 20px;
      font-size: 20px;
    }

    .nav a {
      padding-left: 20px;
      font-size: 10px;
      text-decoration: none;
      color: white;
      margin-right: 5px;
    }
  }
}
</style>
