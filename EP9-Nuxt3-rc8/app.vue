<template>
  <div id="id">
    <nav>
      <NuxtLink to="/">index</NuxtLink>
      <NuxtLink to="/fetch">Fetch</NuxtLink>
      <NuxtLink to="/:id">id</NuxtLink>
    </nav>
    <NuxtPage />
  </div>
</template>
<style lang='scss' scoped>
  nav {
    display: flex;
  }
  a {
    text-decoration: none;
    margin-right: 20px;
  }
</style>
