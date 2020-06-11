import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
  DELETE_POST,
  ADD_POST,
  SET_URL,
} from "./actions/postActions";

const initState = {
  posts: [],
  isFetching: false,
  status: null,
  error: null,
  url: null,
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        posts: action.posts,
      };
    case DELETE_POST:
      console.log(action);
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.id),
      };
    case ADD_POST:
      const post = (({ id, userId, title, body }) => ({
        id,
        userId,
        title,
        body,
      }))({ ...action.post, id: state.posts.length + 1 });

      return {
        ...state,
        posts: [...state.posts, post],
      };
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true,
      };
    case SET_URL:
      return {
        ...state,
        url: action.url,
      };
    default:
      return state;
  }
};

export default appReducer;
