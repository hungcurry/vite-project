<script setup>
import { useFetchStore } from "../stores/axios.js";

// 只能解構 函式 / reactive 
// ref / computed 會失去雙向綁定特色 所以要再用 storeToRefs 重新包起來
const FetchStore= useFetchStore();
const { FetchInit } = FetchStore;

const FetchHandler = ()=> {
  FetchInit('http://www.mocky.io/v2/5cc3f5723400005d00765480');
};
</script>

<template>
  <div class="box">
    <h4>打API 放在Fetch component<br>顯示畫面在App.vue</h4>
    <button @click="FetchHandler">Fetch button</button>
  </div>
</template>

<style lang="scss" scoped>
h4 {
  color: aqua;
  font-size: 26px;
}
.box {
  padding: 10px;
}
p{
  margin-bottom: 10px;
}
</style>
