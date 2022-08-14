import { ref, onMounted, onUnmounted } from 'vue';
export const useWindowsPosition = () =>{
  const pageX = ref(0);
  const pageY = ref(0);
  const update = (e) => {
    pageX.value = e.pageX
    pageY.value = e.pageY
  }
  onMounted(() => window.addEventListener('mousemove', update))
  onUnmounted(() => window.removeEventListener('mousemove', update))
  return{
    pageX, pageY , update
  }
}
/* 也可寫
export function useWindowsPosition (){
  ...textContent
}
*/
