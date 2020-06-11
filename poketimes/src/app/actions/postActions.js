import axios from "axios";

export const DELETE_POST = "DELETE_POST";
export const deletePost = (id) => ({ type: DELETE_POST, id });

export const ADD_POST = "ADD_POST";
export const addPost = (post) => ({ type: ADD_POST, post });

export const SET_URL = "SET_URL";
export const setUrl = (url) => ({ type: SET_URL, url });

export const REQUEST_POSTS = "REQUEST_POSTS";
export const requestPosts = (url) => ({ type: REQUEST_POSTS, url });

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const receivePosts = (url, res) => ({
  type: RECEIVE_POSTS,
  url,
  posts: res.data,
  receivedAt: Date.now(),
});

export function fetchPosts(url) {
  return function (dispatch) {
    dispatch(requestPosts(url));

    return axios
      .get(url)
      .then((res) => dispatch(receivePosts(url, res)))
      .catch((err) => console.error(err));
  };
}
