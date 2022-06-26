import axios from 'axios';

const API = 'http://localhost:3001/api/v1/posts';

export const useGetPosts = async() =>  {
  console.log("LA API ES: " + API);
  const response = await axios.get(API)
  //  .then(()=> console.log("OK"))
  //  .catch((err)=> console.log(err));
  
  return(response.data);
}  


