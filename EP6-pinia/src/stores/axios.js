import { defineStore } from 'pinia'
import axios from "axios";

import { ref } from "vue";
export const useFetchStore = defineStore("fetch" , () => {

  const resAry = ref([]);
  const FetchInit = async(url) =>{
    try {
      const res = await axios.get(url);
      resAry.value = res.data.twzip.city;
    } catch (error) {
      console.log('catch', error.message);
    }
  }
  return{
    resAry , FetchInit
  }
})
