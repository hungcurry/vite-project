<script setup>
  const { num , addCount } = useAddCount();
  console.log(num);


  console.log('process' ,process.client);
  // 瀏覽器 會寫 true  ==>  代表 是在 client 瀏覽器上
  // 終端機 會寫 false ==>  代表 不在 client 瀏覽器上
  if(process.client){
    console.log(window);
  }




</script>
<template>
  <div>
    <div class="card">
      <p>Card</p>
      <CardPhotoItem /> 
      <br>
      <p class="muted">composables 引入</p>
      <p>{{ num }}</p>
      <button @click="addCount">增加</button>
    </div>
  </div>
</template>
<style lang='scss' scoped>
  .card {
    width: 500px;
    height: 500px;
    background-color: brown;
  }
  p {
    font-size: 24px;
  }
  .muted {
    color: rgb(153, 255, 0);
  }
</style>
