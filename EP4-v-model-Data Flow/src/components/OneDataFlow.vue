<script setup>
  const props = defineProps({
      name2 : {
        type : String,
        default : "",
      },
      updateName : {
        type : Function,
        default : ()=>{},
      }
  });
  console.log(props);

</script>
<template>
  <h2>{{ props.name2 }}</h2>
  <button @click="props.updateName('我是麻糬')">修改內容</button>
</template>
<style lang='scss' scoped>
</style>
