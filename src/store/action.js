const addPost = data => {
  return {
    type: "ADD_POST",
    payload: data
  };
};

const delPost = id => {
  return {
    type: "DEL_POST",
    payload: id
  };
};

export {addPost, delPost};