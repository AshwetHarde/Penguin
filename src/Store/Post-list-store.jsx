import {createContext, useReducer, useState, useEffect, } from "react";

export const PostList = createContext({ postList: [],
  addPost : () => {},
  deletePost : () => {},
});

const PostListReducer = (currentPostList, action) =>{
  let newPostList = currentPostList;
  if(action.type === 'DELETE_POST'){
    newPostList= currentPostList.filter((Post) => Post.id !== action.payload.postId);

  }else if (action.type === 'ADD_INITIAL_POSTS') {
    newPostList = action.payload.posts;
  }
  
  else if (action.type === 'ADD_POST') {
    newPostList = [action.payload, ...currentPostList]

  }

return newPostList;
}

const PostListProvider = ({children}) => {
 const [postList, dispatchPostList]= useReducer(PostListReducer,[]); 


 const addPost = (post) => {
  dispatchPostList({
    type : 'ADD_POST',
    payload : post
  })
 };


 const addInitialPosts = (posts) => {
  dispatchPostList({
    type : 'ADD_INITIAL_POSTS',
    payload : {
     posts
    }
  })
 };

 const deletePost = (postId) => {
dispatchPostList({
  type: 'DELETE_POST',
  payload: {
    postId,
  },
})
 };


  return( <PostList.Provider value={{postList, addPost,  deletePost}}> {children} </PostList.Provider>);
};



export default PostListProvider;