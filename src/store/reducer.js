const initialState = {
  posts: [],
  filter: {
    filterActive: false,
    nameFilter: ""
  }
}

export default (state = initialState, action) => {
  console.log("ACTION TYPE ==== " + action.type);
  switch(action.type){
    case "ADD_POST":
      return {
        ...state,
        posts: [...state.posts, action.payload],
        filter: state.filter
      }
    case "DEL_POST":
      return {
        ...state,
        posts: state.posts.filter(item => item.id !== action.payload),
        filter: state.filter
      }
    case "ADD_FILT":
      return {
        ...state,
        posts: [...state.posts],
        filter: {
          filterActive: true,
          nameFilter: action.payload
        }
      }
    case "DEL_FILT":
      return {
        ...state,
        posts: [...state.posts],
        filter: {
          filterActive: false,
          nameFilter: action.payload
        }
      }
    default:
      return state;
  } 
}

export const selectPosts = state => state.amountReducer.posts;
export const viewFilter = state => state.amountReducer.filter;