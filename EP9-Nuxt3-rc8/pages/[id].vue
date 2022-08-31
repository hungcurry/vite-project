<script setup>
  // nuxt3 不需要 會自動引入
  // import { useRoute } from 'vue-router';

  const route = useRoute();
  console.log(route.path);


</script>
<template>
  <div>
    <h1>動態網址</h1>
    <p>{{ route.path }}</p>
  </div>
</template>
<style lang='scss' scoped>
</style>
