<script setup>
// 父層 傳下來 子層 預設v-model : modelValue
const props = defineProps(["modelValue"]);
console.log('props' , props);


// 子層 傳上去 父層 預設v-model : update:modelValue
const emit = defineEmits(["update:modelValue"]);
const inputHander = (e)=>{
  const value = e.target.value;
  console.log('emit' , value);
  // 更新過後的input值 回傳給父層
  emit("update:modelValue" , value)
};
</script>
<template>
  <!-- 上層傳下來的值,重新綁回 input表單的value -->
  <input type="text" 
  :value="props.modelValue"
  @input="inputHander"
  >
  <!-- 簡潔寫法 
  @input="emit('update:modelValue' , $event.target.value)" -->
</template>
<style lang='scss' scoped>
</style>



