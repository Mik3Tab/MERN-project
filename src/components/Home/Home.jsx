import React from "react";
import Posts from "./Posts/Post/Post";
import Profile from "../Profile/Profile";
import "./Home.scss"; 
const Home = () => {
  return (
    <div className="container">
      <div className="profile-container"></div>
      <div className="column profile">
        <Profile/>
        </div>
      <div className="column posts">
      <h2 className="title2">Home</h2>
      <hr />
      <Posts/>
      </div>      
      <div className="column following">
        <h2 className="title3">Who to follow</h2>
      </div>
    </div>
  );
};

export default Home;