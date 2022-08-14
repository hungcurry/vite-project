import { ref  } from 'vue';

import axios from 'axios';
export const useFetchCard = () =>{
  const data = ref( [] );
  const errorMessage = ref("");

  const FetchInit = async(url) =>{
    try {
      const res = await axios.get(url);
      data.value = res.data.twzip.city;
    } catch (error) {
      console.log('catch', error.message);
      errorMessage.value = "API 發生錯誤"
    }
    /* 原始axios寫法
      const FetchInit = (url) =>{
        axios.get(url)
        .then(function(res){
          data.value = res.data.twzip.city;
        })
        .catch(function (error) {
          console.log('catch', error.message);
          errorMessage.value = "API 發生錯誤"
        })
      } 
    */
  }
  return{
    data , errorMessage , FetchInit
  }
}
