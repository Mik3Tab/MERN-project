
import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import {createPost} from '../../../../features/posts/postsSlice';
import './AddPost.scss';

const AddPost = () => {
const [formData, setFormData] = useState({title:" ",description:""});
const { title,description } = formData;
const dispatch = useDispatch();
  const onChange=(event)=>{
    setFormData((prevState)=>({
      ...prevState,
      [event.target.name]:event.target.value,
    }))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(createPost(formData))
}

  return (
    <div className="container-createPost">
      <h2>Publish something</h2>
        <form onSubmit={onSubmit}>
          <h3>Title</h3>
          <input type="text" name="title" onChange={onChange} placeholder="title"/>
          <h3>Description</h3>
          <textarea type="text" name="description" onChange={onChange} placeholder="What is bothering you?"/>
        <button type="submit" className="button-post">Post</button>
        </form>
    </div>
  )
}
export default AddPost;