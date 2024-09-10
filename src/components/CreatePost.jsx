import { Form, redirect } from "react-router-dom";

const CreatePost = ()=> {
//  const{addPost} = useContext(PostList);


  return( <Form method="POST" className="create-post" >

<div className="mb-3">
   <label htmlFor="userID" className="form-label">Enter You User ID </label>
    <input type="text" name="UserID" className="form-control" id="userID" placeholder="Your User ID" />
  </div>


  <div className="mb-3">
   <label htmlFor="title" className="form-label">Post Title </label>
    <input type="text" name="title" className="form-control" id="title" placeholder="How are you feeling Today...." />
  </div> 

  <div className="mb-3">
   <label htmlFor="body" className="form-label">Post Content </label>
    <textarea rows="4" type="text" name="body" className="form-control" id="body" placeholder="Tell us about it" />
  </div>

  <div className="mb-3">
   <label htmlFor="reactions" className="form-label">Number of Reactions </label>
    <input type="text" name="reactions" className="form-control" id="reactions" placeholder="Number of Likes to this posts" />
  </div>

  <div className="mb-3">
   <label htmlFor="tags" className="form-label">Post Title </label>
    <input type="text" name="tags" className="form-control" id="tags" placeholder="Add Hashtsags" />
  </div>

  <button type="submit" className="btn btn-primary">Post</button>
</Form>);
}

export async function CreatePostAction (data)  {
 const formData = await data.request.formData();
 const postData = Object.fromEntries(formData);
 postData.tags = postData.tags.split(" ");
 console.log(postData);
 
  fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData),
  })
  .then((res) => res.json())
  .then ((post) => {console.log(post);
});

return redirect("/");

}

export default CreatePost;