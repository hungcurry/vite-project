import { defineStore } from 'pinia'
import { ref, reactive , onMounted, onUnmounted } from 'vue';
export const PositionStore = defineStore("position" , ()=>{
  const refName = ref('curry');
  const refObj = ref({
    X : 0,
    Y : 0
  });

  const reactiveObj = reactive({
    X2 : 0,
    Y2 : 0
  })
  const update = (e) => {
    refObj.value.X = e.pageX
    refObj.value.Y = e.pageY

    reactiveObj.X2 = e.pageX
    reactiveObj.Y2 = e.pageY
  }
  onMounted(() => window.addEventListener('mousemove', update))
  onUnmounted(() => window.removeEventListener('mousemove', update))
  return {  
    refName  , refObj  , reactiveObj
  }
})
// export const useCounterStore = defineStore({
//   id: 'counter',
//   state: () => ({
//     counter: 0
//   }),
//   getters: {
//     doubleCount: (state) => state.counter * 2
//   },
//   actions: {
//     increment() {
//       this.counter++
//     }
//   }
// })
