const initialState = {
  posts: [],
}

export default (state = initialState, action) => {
  console.log("ACTION TYPE ==== " + action.type);
  switch(action.type){
    case "ADD_POST":
      return {
        ...state,
        posts: [...state.posts, action.payload]
      }
    case "DEL_POST":
      return {
        ...state,
        posts: state.posts.filter(item => item.id !== action.payload)
      }
    default:
      return state;
  } 
}

export const selectPosts = state => state.amountReducer.posts;