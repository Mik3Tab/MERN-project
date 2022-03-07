import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll, reset } from "../../../../features/posts/postsSlice";
import { Spin } from "antd";
import { Link } from "react-router-dom";
import './Post.scss'
const Post = () => {
  const { posts, isLoading } = useSelector((state) => state.posts);
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
    return (
      <div className="card" key={post._id}>
        <div className="ovelay">
        <Link to={"/post/" + post._id}>
        </Link></div>
        <header className="user">
            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="" />
            <div className="user-info">
                <h2>{post.title}</h2>
                <p className="user-info-name">{post._id}</p>
            </div>
        </header>
        <main>
            <p>{post.description}</p>
        </main>
        <section>
            <div className="users-avatars">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt=""/>
                <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt=""/>
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt=""/>
            </div>
            <p>40 Likes</p>
            <p className="comment">10 comment</p>
            <h3 className="dateTime">{post.createdAt}</h3>
        </section>
    </div>
      );
    });
    return <div className="container_post">{post}</div>;
  };
  export default Post;
