import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll, reset, like,dislike,  deletePost } from "../../../../features/posts/postsSlice";
import {HeartFilled, HeartOutlined } from '@ant-design/icons';
import { Spin } from "antd";
import { Link } from "react-router-dom";
import './Post.scss';
const Post = () => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const {user} = useSelector((state) => state.auth);
  const {formData, setFormData} = useState({title: " "});
  const onChange = (event) =>{
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
  }

  const dispatch  = useDispatch();
  useEffect(async()=>{
    await dispatch(getAll());
    await dispatch(reset());
  }, []);
  if(isLoading){
    return(
      <h1>
        <Spin/>
      </h1>
    )
  }

  const post = posts.map((post) => {
    const isLiked = post.likes?.includes(user?.user._id);
    return (
      <div className="card" key={post._id}>
        <div className="ovelay">
          <Link to={"/post/" + post._id}>
          </Link></div>
          <header className="user">
            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="" />
            <div className="user-info">
                <p className="user-info-name">{post?.userId?.name }</p>
                <h2>{post.title}</h2>
            </div>
        </header>
        <main>
            <p>{post.description}</p>
        </main>
        <section>
            <p className="like">Likes: {post.likes?.length}</p>
            {isLiked
            ?
            <HeartFilled onClick={isLiked ? () => dispatch(dislike(post._id)) : () => dispatch(like(post._id))} />
            :
            <HeartOutlined onClick={isLiked ? () => dispatch(dislike(post._id)) : () => dispatch(like(post._id))} />
            }
            <p className="comment">10 comment</p>
            <button onClick={() => dispatch(deletePost(post._id))}>Delete</button>
            <button onClick={() => dispatch(deletePost(post._id))}>Edit</button>
        </section>
    </div>
      );
    });
    return <div className="container_post">{post}</div>;
  };
  export default Post;
