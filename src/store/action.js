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

export {addPost, delPost, addFilter, delFilter};