import React from "react";
import Posts from "./Posts/Post/Post";
import Profile from "../Profile/Profile";
import "./Home.scss"; 
const Home = () => {
  return (
    <div className="container">
      <div className="column">
        <Profile/>
      </div>
      <div className="column posts">
      <h2>Home</h2>
      <hr />
      <Posts/>
      </div>      
      <div className="column">
        <h2>Who to follow</h2>
        <hr />
      </div>
    </div>
  );
};

export default Home;