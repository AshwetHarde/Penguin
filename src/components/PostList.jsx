import { useContext, } from "react";
import Post from "./Post";
import { PostList as  PostListData} from "../Store/Post-list-store";
import WelcomeMessage from "./WelocomeMessage";
import LoadingSpinner from "./LoadingSpinner"
import { useLoaderData } from "react-router-dom";


const PostList = () => {
 const postList=   useLoaderData ();



  return <>

    
      { postList.length === 0 && <WelcomeMessage />}
      { postList.map((post) => (< Post key={post.id} post={post}/>))}
      
  </>

}

export const postLoader = () => {
 return fetch('https://dummyjson.com/posts')
  .then((res) => res.json())
  .then(data => {
    return (data.posts);
    setFetching(false);
    } );

}

export default PostList;