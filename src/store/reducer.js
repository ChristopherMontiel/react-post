const initialState = {
  posts: [],
}

export default (state = initialState, action) => {
  switch(action.type){
    case "ADD_POST":
      return {
        ...state,
        posts: [...state.posts, action.payload]
      };
    case "SET_NAME":
      return {
        ...state,
        posts: [...state.posts, action.payload]
      };
    default:
      return state;
  }
  /* if(action.type === "DEL_POST"){
    return {
      ...state,
      posts: state.posts.filter(items => items.id !== action.payload )
    }
  } */
 
}