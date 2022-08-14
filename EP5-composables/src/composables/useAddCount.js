import { ref ,readonly } from 'vue';

export const useAddCount = (value) =>{
  // 初始值
  const count = ref(value);

  const setCount = (data)=>{
    count.value = data;
  }
  return{
    count : readonly(count),
    setCount
  }
}
