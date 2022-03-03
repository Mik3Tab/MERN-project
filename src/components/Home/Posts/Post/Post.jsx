import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll, reset, like } from "../../../../features/posts/postsSlice";
import { Spin } from "antd";
import { Link } from "react-router-dom";
const Post = () => {
  const { posts, isLoading } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({title: "", description: ""});
  const {title, description} = formData;

  const onChange = (event) =>{
    setFormData((prevState)=>({
      ...prevState,
      [event.target.name]:event.target.value,
    }))
  }

  const dispatch = useDispatch();
  useEffect(async () => {
    await dispatch(getAll());
    await dispatch(reset());
  }, []);

  if (isLoading) {
    return (
      <h1>
        <Spin />
      </h1>
    );
  }

  const post = posts.map((post) => {
    console.log(user);
    return (
      <div className="post" key={post.id}>
        <Link to={"/post/" + post.id}>
          <p>{post.title}</p>
        </Link>
      </div>
    );
  });
  return <div>{post}</div>;
};

export default Post; 