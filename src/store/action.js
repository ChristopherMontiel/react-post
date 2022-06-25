const addPost = data => {
  return {
    type: "ADD_POST",
    payload: data
  };
};

const delPost = name => {
  return {
    type: "DEL_POST",
    payload: name
  };
};

export {addPost, delPost};