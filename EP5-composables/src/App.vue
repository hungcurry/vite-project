<script setup>
import  { useWindowsPosition  } from "./composables/useWindowsPosition.js"
import  { useAddCount  } from "./composables/useAddCount.js"
import  { useFetchCard  } from "./composables/useFetchCard.js"
import { ref, onMounted, onUnmounted } from 'vue'


// 座標
const { pageX , pageY } = useWindowsPosition();
console.log('pageX' , pageX , 'pageY' ,pageY);

// 計算
const { count , setCount } = useAddCount(0);
const addHandler = ()=>{
  // X 會出錯 因為參數已經被唯獨 有保護參數意味
  // count.value = 20;
  
  // O 必須透過函式來調用執行
  setCount(10);
};

// Fetch API
const { data , errorMessage ,FetchInit } = useFetchCard();
onMounted(()=>{
  FetchInit("http://www.mocky.io/v2/5cc3f5723400005d00765480");
  console.log('data' , data);
});
</script>
<template>
  <!-- 座標 -->
  <h2>座標</h2>
  <p>pageX: {{ pageX }}, pageY: {{ pageY }}</p>
  <hr>
  <!-- 計算 -->
  <h2>計算</h2>
  <p>{{ count }}</p>
  <button @click="addHandler">增加</button>
  <hr>
  <!-- Fetch API -->
  <h2>Fetch API</h2>
  <div class="red" v-if="errorMessage !=='' ">{{ errorMessage }}</div>

  <p v-else-if="data.length === 0">loading.....</p>

  <div v-else>
    <ul v-for="(item , idx) in data" :key="item.name">
      <li>{{ item.name }}</li>
    </ul>
  </div>
</template>
<style lang='scss' scoped>
.red{
  color: red;
}
</style>




