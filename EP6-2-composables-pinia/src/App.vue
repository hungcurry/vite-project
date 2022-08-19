<script setup>
import { storeToRefs } from 'pinia'
import { ref, toRefs } from 'vue'
import InputBar from './components/InputBar.vue'

// components
import FetchCard from './components/FetchCard.vue'
import FetchPinia from './components/FetchPinia.vue'

// pinia store
import Position from './components/Position.vue'
import PositionPinia from './components/PositionPinia.vue'

const model = ref('雙向資料流')
const title = ref('白爛貓')
const colorPrimary = ref("#ff0000")
const eventHandler = (res) => {
  title.value = res
};
const changeColor = () => {
  colorPrimary.value = "#0000ff"
};
</script>
<template>
  <h4>雙向資料流</h4>
  <InputBar v-model="model" :title="title" @changeName="eventHandler"/>
  <p>model :{{ model }}</p>
  <p>title :{{ title }}</p>
  <hr>
  <FetchCard />
  <hr>
  <FetchPinia />
  <!-- 座標位置 -->
  <Position />
  <PositionPinia />
  <h2 class="title">{{ model }}</h2>
  <button @click="changeColor">改變顏色</button>
</template>
<style lang="scss" scoped>
h3,h4 {
  font-size: 24px;
  color: aqua;
}
.title {
  color : v-bind(colorPrimary)
}
</style>

