<script setup>
// nuxt3 不需要 會自動引入
// import Card from '../components/Card/index.vue'


const num = ref(0);
onMounted(() => {
  setInterval(() => {
    num.value++;
  }, 1000);
});
</script>
<template>
  <div>
    <h1>首頁</h1>
    <p>{{ num }}</p>
    <br>
    <!-- components 自動引入 -->
    <h4>components 自動引入</h4>
    <Card />
    <Todo />
  </div>
</template>
<style lang='scss' scoped>
h4 {
  font-size: 32px;
  color: aqua;
}
</style>

