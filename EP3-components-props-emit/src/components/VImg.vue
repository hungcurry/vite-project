<script setup>
const props = defineProps(['alt', 'className', 'src', 'width', 'height']);
console.log('VImg' , props);
</script>

<!-- 群組式宣告：[ ] (前面是原本css class 後面是 vue的) -->
<template>
  <img
    :alt="props.alt"
    :class="[ 'VImg', { className} ]"
    :src="props.src"
    :width="props.width"
    :height="props.height"
  />
</template>

<style lang="scss" scoped>
.VImg {
  padding: 20px;
  border: 2px solid green;
}
</style>
