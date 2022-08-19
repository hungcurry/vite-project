<script setup>
import { onMounted , watch } from 'vue';
// 單一載入
// import { FetchCard } from '../composables/useFetchCard.js'
// const { ary , useName , FetchInit } = FetchCard();


// 統一入口 index.js 載入
import { useFetchCard } from '../composables/index.js'
const { ary , useName , FetchInit } = useFetchCard();


console.log("composables" , useName , ary);
console.log(`-----------`);

const fetchClick = () => {
  FetchInit("http://www.mocky.io/v2/5cc3f5723400005d00765480");
  // console.log(ary, useName ,FetchInit);
};
watch( ary , ( newV, oldV ) => {
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
  <h4>composables</h4>
  <button @click="fetchClick">打API</button>
  <p>{{ useName }}</p>
  <p v-if="ary.length === 0">Loading...</p>
  <div v-else>
    <ul v-for="(item ,idx) in ary" :key="item.name">
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

