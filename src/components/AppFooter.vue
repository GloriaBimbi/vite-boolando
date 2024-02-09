<script>
export default {
  data() {
    return {};
  },
  props: {
    links: Array,
    socials: Array,
  },
};
</script>
<template>
  <footer>
    <div class="container footer__wrapper">
      <div id="general-info">
        <span class="brand"><strong>Booleando s.r.l.</strong></span>
        <br />
        <div v-for="link in links" class="nav">
          <a :href="link.url" class="header__link">{{ link.text }}</a>
        </div>
      </div>
      <div class="social-media-contacts">
        Trovaci anche su <br />
        <a v-for="social in socials" :href="social.url">
          <i :class="social.icon"></i>
        </a>
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

    .nav {
      display: inline;
      gap: 5px;
      a {
        font-size: 10px;
        text-decoration: none;
        margin-left: 20px;
      }
    }
  }
}
</style>
