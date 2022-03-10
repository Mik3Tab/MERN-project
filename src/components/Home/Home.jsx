import React, { useEffect } from "react";
import Post from "./Posts/Post/Post";
import Profile from "../Profile/Profile";
import AddPost from "../Home/Posts/AddPost/AddPost";
import "./Home.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAll, reset } from "../../features/posts/postsSlice";
// import { Spin } from "antd";

const Home = () => {
  // const {isLoading} = useSelector(state => state.posts)
  const dispatch = useDispatch()
  useEffect(async()=>{
    await dispatch(getAll());
    await dispatch(reset());
  }, []);
  // if(isLoading){
  //   return(
  //     <h1>
  //       <Spin/>
  //     </h1>
  //   )
  // }
  return (
    <div className="container">
      <div className="profile-container"></div>
      <div className="column profile">
        <Profile/>
        </div>
      <div className="column posts">
      <h2 className="title2">Home</h2>
      <hr />
      <AddPost/>
      <Post/>
      </div>      
      <div className="column following">
      </div>
    </div>
  );
};
export default Home;