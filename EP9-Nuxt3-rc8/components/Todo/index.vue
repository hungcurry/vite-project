<script setup>
import PhotoItem  from './PhotoItem.vue'
</script>
<template>
  <div>
    <div class="Todo">
      <p>Todo</p>
      <!-- 方法一:原本import-->
      <p class="muted">元件引入 原本import</p>
      <PhotoItem /> 
      <p class="muted">元件引入 資料夾階層命名</p>
      <!-- 方法二: 資料夾階層命名-->
      <TodoPhotoItem /> 
    </div>
  </div>
</template>
<style lang='scss' scoped>
  .Todo {
    width: 500px;
    height: 500px;
    background-color: rgb(89, 42, 165);
  }
  p {
    font-size: 24px;
  }
  .muted {
    color: rgb(153, 255, 0);
  }
</style>
