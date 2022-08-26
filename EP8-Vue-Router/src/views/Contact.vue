<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>
<template>
  <h1>This is an about Contact</h1>

  <nav>
    <RouterLink to="/contact/A">專案介紹</RouterLink>
    <RouterLink to="/contact/B">常見問題</RouterLink>
    <RouterLink to="/contact/C">目前進度</RouterLink>
  </nav>
  <RouterView />
</template>
<style lang='scss' scoped>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}
nav a {
  display: inline-block;
  margin-right: 50px;
}
</style>
