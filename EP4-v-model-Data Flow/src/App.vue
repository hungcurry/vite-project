<script setup>
import InputBar from './components/InputBar.vue';
import TwoDateFlow from './components/TwoDateFlow.vue';
import OneDataFlow from './components/OneDataFlow.vue';
import { ref , reactive } from "vue";



// 資料流
// Event - v-model
// https://vuejs.org/guide/components/events.html#usage-with-v-model

// v-model 
const num = ref("123");

// 雙向資料流
const name = ref("雙向資料流");
const updateName = (res) => {
  name.value =res;
};

// 單向資料流
const name2 = ref("單向資料流");
const ChangeName = (val) => {
  name2.value = val ;
};
</script>
<template>
  <!-- v-model -->
  <h4>1.組件之間 v-model傳遞</h4>
  <InputBar v-model="num"/>
  <p>{{ num }}</p>
  <hr>

  <h4>2.自己用客製化 雙向資料流<br>製作出類似模擬v-model</h4>
  <!-- 模擬v-model 雙向資料流-->
  <TwoDateFlow :name="name" @changeName="updateName" />
  <hr>

  <h4>3.自己用客製化 單向資料流</h4>
  <OneDataFlow :name2="name2" :updateName="ChangeName"/>
</template>

<style lang='scss' scoped>
h4 {
  color: aqua;
}
</style>


