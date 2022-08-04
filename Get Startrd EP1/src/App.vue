<!-- npm方式-Options API -->
<!-- <script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  },
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}
</script>

<template>
  <h1>Vue : {{ count }}</h1>
  <button @click="increment">Count is: {{ count }}</button>
</template> -->



<!-- npm方式-Composition API -->
<script setup>
import { ref, onMounted } from 'vue'
const count = ref(0)

function increment() {
  count.value++
}

onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
  <h1>Vue : {{ count }}</h1>
  <button @click="increment">Count is: {{ count }}</button>
</template>
