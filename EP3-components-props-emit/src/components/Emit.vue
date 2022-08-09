<script setup>
import { onMounted, ref , reactive} from 'vue';

// const emit = defineEmits(["addValue"]);
const emit = defineEmits({
  addValue : (count)=>{
    console.log("傳出" , count);
    return count.value !== 0
  }
})

const count = ref(0);
const addHander = ()=>{
  count.value++
  emit("addValue" , count)
};
onMounted(()=>{
  console.log(`The emit count is ${count.value}.`)
});
</script>
<template>
  <button @click="addHander">emit 按鈕</button>
</template>
<style lang='scss' scoped>
</style>
