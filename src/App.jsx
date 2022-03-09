import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import PostDetail from "./components/Home/Posts/PostDetail/PostDetail";
import Search from "./components/Search/Search";
import AddPost from "./components/Home/Posts/AddPost/AddPost";
import Footer from "./components/Footer/Footer";
import updatePost from './components/Home/Posts/EditPost/EditPost';
import './App.scss';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/AddPost" element ={<AddPost/>}></Route>
          <Route path="/home" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/post/:_id" element={<PostDetail/>} />
          <Route element={<Footer/>}/>
          <Route path="/post/editPost/_id" element={<updatePost/>}/>
          <Route path="/search/:title" element={<Search/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}
export default App;