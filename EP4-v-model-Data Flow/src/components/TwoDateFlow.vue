<script setup>
  const props = defineProps({
      name : {
        type : String,
        default : "",
      }
  });

  const emit = defineEmits(["changeName"]);
  const changeHandler = () =>{
    // X 這樣會出錯  子元件避免去直接修改 父層資料
    // props.name  = "xxxxx"

    // O 正確用法
    emit("changeName" , "我是白爛貓")
  };
</script>
<template>
  <h2>{{ props.name }}</h2>
  <button @click="changeHandler">修改內容</button>
</template>
<style lang='scss' scoped>
</style>
