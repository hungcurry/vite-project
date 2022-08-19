import axios from "axios"
import { ref } from "vue"

export const FetchCard = () =>{
  const ary = ref( [] );
  const useName = ref("curry");

  const FetchInit = async (url) => {
    try {
      const res = await axios.get(url);
      ary.value = res.data.twzip.city;
    } catch (error) {
      console.log(error.message);
    }
  };
  return{
    ary , useName , FetchInit
  }
}
