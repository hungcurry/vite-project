<script setup>
const props = defineProps({
  modelValue : {
    typeof : String,
    default : "no name"
  },
  title : {
    typeof : String,
    default : "no name"
  },
})
console.log('傳入' , props);
console.log(`-----------`);

const emit = defineEmits({
  'update:modelValue' : (payload) => {
    console.log('傳出', payload)
    return payload.value !== ''
  },
  changeName : (payload) => {
    console.log('傳出', payload)
    return payload.value !== ''
  },
});

const modelHandler = (e) => {
  emit('update:modelValue', e.target.value);
};
const clickHandler = (e) => {
  emit('changeName', e.target.value);
};
</script>
<template>
<label for="">model:</label>
<input type="text" :value="props.modelValue" @input="modelHandler" />
<br>
<br>
<label for="">props / emit:</label>
<input type="text" :value="props.title" @input="clickHandler" />

</template>
<style lang="scss" scoped>
h4 {
  font-size: 24px;
  color: aqua;
}
label {
  display: block;
}
</style>
