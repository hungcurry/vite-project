<script setup>
import Fetch from './components/Fetch.vue';
import { useCounterStore } from "./stores/counter.js";
import { useFetchStore } from "./stores/axios.js";
import { ref , watch } from 'vue';

// 只能解構 函式 / reactive 
// ref / computed 會失去雙向綁定特色 所以要再用 storeToRefs 重新包起來
import { storeToRefs } from 'pinia';
const countStore = useCounterStore();
console.log(`countStore` , countStore);
const { counter , doubleCount } = storeToRefs(countStore); // 解構 ref / computed 
const { addCount , reObj } = countStore; // 解構 函式 / reactive 

const addHandler = () => {
  addCount();
};

// 原本的監聽
watch( counter , ( newV, oldV ) => {
  console.log('new' , newV, 'old' , oldV);
});
// pinia版監聽
countStore.$subscribe((mutation, state) => {
  console.log('mutation' , mutation);
  console.log('state' ,state);
})


const fetchStore = useFetchStore();
const { resAry } = storeToRefs(fetchStore);
</script>

<template>
  <div class="box">
    <h4>ref / 函式傳遞</h4>
    <p>ref的值 : {{ counter }}</p>
    <p>computed的值 : {{ doubleCount }}</p>
    <button @click="addHandler">增加</button>
    <br>
    <h4>reactive 傳遞</h4>
    <p>reactive的值 : {{ reObj.name }}</p>
  </div>
  <hr>
  <Fetch />
  <div class="box">
    <ul v-for="(item , idx) in resAry" :key="item.name">
      <li>{{ item.name }}</li>
    </ul>
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
