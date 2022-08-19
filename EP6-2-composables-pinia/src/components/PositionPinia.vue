<script setup>
// 單一載入
// import { PositionStore } from '../stores/usePositionStore.js'

// 統一入口載入
import { usePositionStore } from "../stores/index.js"
const positionStore  =  usePositionStore();
//------ pinia -------
/* 
    store 只能解構 函式 / reactive
    ref / computed 會失去雙向綁定特色 所以要再用 storeToRefs 重新包起來 
*/
import { storeToRefs } from 'pinia'
const { refName , refObj } = storeToRefs(positionStore);
console.log("pinia 座標範例");
console.log('refName' , refName);
console.log('refObj' , refObj);

/* 普通函式 或 pinia-
解構ref裡面的值 無法在解構
*/
const { X , Y } = refObj;
console.log( "X" , X , "Y" , Y);



//------普通函式 或 pinia-------
/* 
    解構reactive裡面的值 會失去特性
    要再用toRefs 讓裡面的值雙向綁定
*/
import { ref, toRefs } from 'vue'
const { reactiveObj } = positionStore;
console.log('reactiveObj' , reactiveObj);

const { X2 , Y2 } = toRefs(reactiveObj);
console.log( "X2" , X2 , "Y2" , Y2);
console.log(`-----------`);
</script>
<template>
  <h4>座標位置: pinia</h4>
  <h3>ref 解構</h3>
  <p>{{ refName }}</p>

  <h3>ref物件 解構</h3>
  <p>X :{{ refObj.X  }}  /  Y: {{  refObj.Y }}</p>

  <h3>ref物件 / XY值 toRefs重新解構</h3>
  <p>X :{{ X  }}  /  Y: {{  Y }}</p>

  <h3>reactive物件 解構</h3>
  <p>X2 :{{ reactiveObj.X2  }}  /  Y2: {{  reactiveObj.Y2 }}</p>

  <h3>reactive物件 / XY值 toRefs重新解構</h3>
  <p>X2 :{{ X2  }}  /  Y2: {{  Y2 }}</p>
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
