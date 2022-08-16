import { defineStore } from 'pinia'
import { ref , computed, reactive } from 'vue';


/* ===================
... Option API ...
==================== */
// export const useCounterStore = defineStore({
//   id: 'counter',
//   state: () => ({
//     counter: 0
//   }),
//   getters: {
//     doubleCount: (state) => state.counter * 2
//   },
//   actions: {
//     addCount() {
//       this.counter++
//     }
//   }
// })


/* ===================
... Composition API ...
==================== */
export const useCounterStore = defineStore("counter" , () => {
  const counter = ref(0);
  const reObj = reactive({
    name : "curry",
    age : 18
  })

  // ComputedRefImpl
  const doubleCount = computed(() => {
    return counter.value * 2
  });

  const addCount = () => {
    counter.value++
  };
  return{
    counter , reObj , addCount , doubleCount
  }
})
