<script setup>
import Area from './components/Area.vue';
import logo from './assets/logo.svg';
import Props from './components/Props.vue';
import Emit from './components/Emit.vue';

import Component1 from './components/Component1.vue';
import Component2 from './components/Component2.vue';
import Component3 from './components/Component3.vue';

import { onMounted, ref , reactive , computed} from 'vue';

// Props
const string = ref('curry')
const boolean = ref(false)
const number = ref(9)
const array = ref([1, 2, 3])
const object = ref({ name : "marry"})
const clickHandler = ()=>{
  console.log(`88`);
};

// Emit
const resInt = ref(0);
const emitCallBack = (res)=>{
  console.log("Emit" , res.value);
  resInt.value = res;
};

// components 動態切換
const idxChange = ref(1);
const changeComponents = (idx)=>{
  idxChange.value = idx;
};
const Components = computed(() => {
  // https://vuejs.org/api/built-in-special-elements.html#component
  // 如果是vue2 這邊是return 字串
  // return "Component1"
  switch (idxChange.value) {
    case 1:
      return Component1
      break;
    case 2:
      return Component2
      break;
    case 3:
      return Component3
      break;
    default: 
      return Component1
      break;
  }
});
</script>

<template>
  <Global />
  <Area /> 
  <!-- Props -->
  <!--=================
  直接使用相對路徑會錯誤 
  :src = "./assets/logo.svg" 
  要轉換寫法
  :src="logo"
  ===================-->
  <VImg
    alt = "Vue logo"
    className="logo"
    :src="logo"
    width = "200"
    height = "200"
  />
  <Props
    :string="string"
    :boolean="boolean"
    :number="number"
    :array="array"
    :object="object"
    :clickHandler="clickHandler"
  />
  <!-- emit -->
  <h4>Emit: =>{{ resInt }}</h4>
  <Emit @addValue="emitCallBack"/>
  <!-- components 動態切換 -->
  <div class="changeComponents">
    <button @click="changeComponents(1)">button-1</button>
    <button @click="changeComponents(2)">button-2</button>
    <button @click="changeComponents(3)">button-3</button>
  </div>

  <!-- ２種方式 -->

  <!-- :is -->
  <!-- <component :is="Components"/> -->

  <!-- v-if -->
  <Component1 v-if="idxChange === 1"/>
  <Component2 v-if="idxChange === 2"/>
  <Component3 v-if="idxChange === 3"/>
</template>
<style lang="scss" scoped>
h4 {
  color: aquamarine;
  font-size: 30px;
}
.changeComponents{
  margin-top: 50px;
  border-top: 5px solid red;
}
button {
  display: inline-block;
  margin-right: 20px;
  margin-top: 50px;
}
</style>
