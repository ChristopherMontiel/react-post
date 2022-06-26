import { useAddPosts, useDelPosts} from "../services/useApiPosts";

const initPost = data => {
  return {
    type: "INI_POST",
    payload: data
  };
};

const addPost = data => {
  useAddPosts(data);
  return {
    type: "ADD_POST",
    payload: data
  };
};

const delPost = id => {
  useDelPosts(id);
  return {
    type: "DEL_POST",
    payload: id
  };
};

const addFilter = nameFilter => {
  return {
    type: "ADD_FILT",
    payload: nameFilter
  }
}

const delFilter = () => {
  return {
    type: "DEL_FILT",
    payload: ""
  }
}

export {initPost, addPost, delPost, addFilter, delFilter};