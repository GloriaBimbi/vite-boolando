<script>
export default {
  data() {
    return {
      links: [
        {
          url: "#",
          text: "Donna",
        },
        {
          url: "#",
          text: "Uomo",
        },
        {
          url: "#",
          text: "Bambini",
        },
      ],
    };
  },
};
</script>

<template>
  <header>
    <div class="container header__wrapper">
      <nav class="nav">
        <ul>
          <li v-for="link in links">
            <a :href="link.url" class="header__link">{{ link.text }}</a>
          </li>
        </ul>
      </nav>
      <img
        src="../assets/img/boolean-logo.png"
        alt="Logo Boolean"
        class="boolean-logo"
      />
      <div class="porsonal-space-login">
        <i class="fa-regular fa-user icon"></i>
        <i class="fa-regular fa-heart icon"></i>
        <i class="fa-solid fa-bag-shopping icon"></i>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;

    li {
      list-style-type: none;
    }
  }
}

.header__link {
  text-decoration: none;
  color: white;
  padding-left: 20px;
  font-size: 0.8rem;
}

.boolean-logo {
  height: 30px;
}

.icon {
  color: white;
  padding: 0 5px 0 0;
}
</style>
