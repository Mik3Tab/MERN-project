
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getById, insertComment } from "../../../../features/posts/postsSlice";
import './PostDetail.scss'
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
    <p>Comment:</p>
    <p key={comment._id}>{comment.comment}</p>
  </div>)
})
  return (
    <div>
      <h2>PostDetail</h2>
      <h2>Post title: {post.title}</h2>
     <form onSubmit={onSubmit} className="postDetail-container">
       <h2>comment content</h2>
       <textarea name="comment" type="text" value={formData.comment} onChange={onChange}/>
       <button type="submit">Comment</button>
       </form>
       <div className="comments">
        <h2>{singleComment}</h2>
         <h3>Comments on this post:</h3>
         </div>
    </div>
  );
};

export default PostDetail;