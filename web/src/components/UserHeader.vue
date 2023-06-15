<template>
  <header>
    <div class="logo">
      <img src="@/assets/imgs/logo.png" alt="" />
    </div>
    <div class="login">
      <router-link to="/">
        <img
          class="close-icon"
          src="@/assets/icons/close_white_48dp.svg"
          alt=""
        />
      </router-link>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  background: #13171b;
  box-shadow: 2px 5px 5px rgba(0, 0, 0, .5);
}

.logo img {
  width: 13rem;
}
</style>