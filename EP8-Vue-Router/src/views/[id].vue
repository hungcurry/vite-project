<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
console.log(route);

// 網頁輸入 id-123
// route.params.id  123
// route.path /123
</script>

<template>
  <h1>{{ route.params.id }}</h1>
</template>
