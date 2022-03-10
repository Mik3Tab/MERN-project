
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getById, insertComment } from "../../../../features/posts/postsSlice";

const PostDetail = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.posts);
  const[  formData, setFormData ] = useState({ comment: " ", _id})
  console.log(formData);
  useEffect(() => {
    dispatch(getById(_id));
  }, []);
  const onChange = (event) =>{
    setFormData((prevState) =>({
      ...prevState,
      [event.target.name]: event.target.value,
        }))
  }
  const onSubmit = (event) =>{
    event.preventDefault();
    dispatch(insertComment(formData));
    setFormData({comment:"", postId:post._id});
  }
const singleComment = post.comments?.map((comment)=>{
  return (
  <div>
    <p key={comment._id}>{comment.comment}</p>
  </div>)
})
  return (
    <div>
      <h1>PostDetail</h1>
      <p>{post.title}</p>
     <form onSubmit={onSubmit}>
       <textarea name="comment" type="text" value={formData.comment} onChange={onChange}/>
       <button type="submit">Comment</button>
       </form>
       <div className="comments">
         <h2>Comments on this post:</h2>
       {singleComment}
         </div>
    </div>
  );
};

export default PostDetail;