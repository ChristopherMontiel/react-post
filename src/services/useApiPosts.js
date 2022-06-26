import axios from 'axios';

const API = 'http://localhost:3001/api/v1/posts';

export const useGetPosts = async() =>  {
  console.log("LA API ES: " + API);
  const response = await axios.get(API)
  //  .then(()=> console.log("OK"))
  //  .catch((err)=> console.log(err));
  
  return(response.data);
}  

export const useAddPosts = async(post) =>  {
  console.log("LA API ES: " + API);
  const response = await axios.post(API, post)

  //  .then(()=> console.log("OK"))
  //  .catch((err)=> console.log(err));
  
  return(response.data);
}  

export const useDelPosts = async(id) =>  {
  let delApi = API + "/" + id;
  console.log("LA API ES: " + delApi);
  
  const response = await axios.delete(delApi);

  //  .then(()=> console.log("OK"))
  //  .catch((err)=> console.log(err));
  
  return(response.data);
} 