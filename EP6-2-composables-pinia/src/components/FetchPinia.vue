<script setup>
import { storeToRefs } from 'pinia';
import { onMounted , watch } from 'vue';
// 單一載入
// import { FetchStore } from "../stores/useFetchStore.js"

// 統一入口載入
import { useFetchStore } from "../stores/index.js"
const FetchStore = useFetchStore();


const { useName , isLoad  , errorMessage } = storeToRefs(FetchStore);
const { reactiveAry , FetchInit } = FetchStore;

console.log("pinia" , useName , reactiveAry);
console.log(`-----------`);

const fetchClick = () => {
  FetchInit("http://www.mocky.io/v2/5cc3f5723400005d00765480");
  console.log( useName , reactiveAry , FetchInit);
};
watch( reactiveAry , ( newV, oldV ) => {
  // // 監控本身物件, 此時新舊值不會變動, 因為都是物件本身
  console.log('new' , newV, 'old' , oldV);
});
onMounted(()=>{
  // 初始化執行
  // setTimeout(() => {
  //   FetchInit("http://www.mocky.io/v2/5cc3f5723400005d00765480");
  // }, 2000);
});
</script>
<template>
  <h4>pinia</h4>
  <button @click="fetchClick">打API</button>
  <p>{{ useName }}</p>

  <div v-if="errorMessage">{{ errorMessage }}</div>

  <p v-else-if="!isLoad">Loading...</p>

  <div v-else>
    <ul v-for="(item ,idx) in reactiveAry.data" :key="item.name">
      <li>{{ item.name }}</li>
    </ul>
  </div>

</template>
<style lang="scss" scoped>
h4 {
  font-size: 24px;
  color: aqua;
}
button {
  display: block;
  padding: 10px 20px;
}
</style>
