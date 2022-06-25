const addPost = data => {
  return {
    type: "ADD_POST",
    payload: data
  };
};

const delPost = () => {
  return {
    type: "DEL_POST",
    payload: -1
  };
};

export {addPost, delPost};