<script setup>
// 有自動引入 可省略
// import { storeToRefs } from "pinia";

import { useCountStore } from '@/stores/index.js';
const CounterStore = useCountStore();

const { num } = storeToRefs(CounterStore);
const { addCount } = CounterStore;
</script>
<template>
  <div class="count">
    <h1>This is an pinia count page</h1>
    <br />
  </div>
  <h2>pinia : {{ num }}</h2>
  <br />
  <button @click="addCount">點我增加</button>
</template>
<style lang="scss" scoped>
h2 {
  font-size: 50px;
  color: red;
}

button {
  display: block;
  padding: 15px;
  font-size: 14px;
}

@media (min-width: 1024px) {
  .count {
    margin-top: 50px;
  }
}
</style>
