<script setup>
import { reactive, ref , watch , computed} from 'vue';

const name = ref("麻糬")
const data = reactive({
  name: "curry",
  age: 12,
  address: "Taipei"
});
setTimeout(() => {
  data.name = "jacky",
  data.age = 18,
  data.address = "台灣"
}, 2000);
// -----------------------
const people1 = ref({
  num : 0,
});
const people2 = reactive({
  num: 0 ,
})
// 預設無法監控 除非下people1.value 或 {deep: true}
watch( people1 , ( newV, oldV ) => {
  console.log('people1-new' , newV, 'old' , oldV);
});
watch( people2 , ( newV, oldV ) => {
  console.log('people2-new' , newV, 'old' , oldV);
});
setTimeout(() => {
  people1.value.num = 1;
  people2.num = 1
}, 2000);
// -----------------------
// reactive 每一個屬性都是ref且 解包過
const num = ref(0);
// 將ref 的num帶入 理論上num2.num 取到refImpl
// 但是卻自動解包 出0
const num2 = reactive({
  num: num ,
})
console.log(num2);
console.log(num2.num);
// -----------------------
// 基本用法
const countNumber = ref(0);
const countData = computed(() => {
  return `這個數字被改變${countNumber.value}`
});
// get set 用法
const count = ref(1);
const plusValue = computed({
  get: ()=>{
    return `數字改變${count.value}`
  },
  set: (val)=>{
    count.value = val;
  }
});

console.log('change' , count.value); // change 數字改變 1
plusValue.value = 5;
console.log('change2' ,plusValue.value);
console.log('change3' ,count.value);
</script>
<template>
<h2>{{ name }}</h2>
<h2>{{ data.name }}</h2>
<p>{{ data.age }}</p>
<p>{{ data.address }}</p>
<hr>
<h2>ref: =>{{  people1.num }}</h2>
<h2>reactive: =>{{ people2.num  }}</h2>
<hr>
<h2>{{ num2.num }}</h2>
<h2>{{ countData }}</h2>
</template>
<style scoped>

</style>
