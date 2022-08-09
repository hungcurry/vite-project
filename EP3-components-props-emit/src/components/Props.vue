<script setup>
const props = defineProps({
  string: {
    typeof: String,
    default: 'no name',
  },
  boolean: {
    typeof: Boolean,
    default: false,
  },
  number: {
    typeof: Number,
    default: 123555,
  },
  array: {
    typeof: Array,
    default: ()=> [],
  },
  object: {
    typeof: Object,
    default: ()=>({}),
  },
  clickHandler: {
    typeof: Function,
    default: ()=>{},
  },
})
console.log('基本用法props' , props);
</script>
<template>
<h4>props: => {{ props.string }}</h4>
</template>
<style lang="scss" scoped>
h4 {
  color: aquamarine;
  font-size: 30px;
}
</style>


