import axios from "axios";
const API_URL = "http://localhost:3001";

const getAll = async () => {
  const res = await axios.get(API_URL + "/posts/findAll");
  return res.data;
};

const getById = async (_id) =>{
    const res = await axios.get(API_URL + "/posts" + _id);
    return res.data;
}

const createPost = async (post)=>{
  const user = JSON.parse(localStorage.getItem('user'));
  const res = await axios.post(API_URL + "/posts/create", post, {
    headers:{
      authorization: user?.token,
    }
  })
  if(res.data){
   getAll(); 
  }
  return res.data;
}

const deletePost = async(post)=>{
  const user = JSON.parse(localStorage.getItem("user"));
  const res = await axios.delete(API_URL + "/posts/delete/" + post, {
    headers: {
      authorization: user?.token,
    }
  })
  return res.data;
}

const getPostByName = async(title)=>{
  const res = await axios.get(API_URL + "/posts/findByTitle/" + title);
  return res.data;
}

const insertComment = async(comment)=>{
  const user = JSON.parse(localStorage.getItem("user"));
  const res = await axios.put(API_URL + "/posts/comments/" + comment._id, comment, {
    headers: {
      authorization: user?.token,
    },
  })
  return res.data;
}

const updataePost = async (formData)=>{
  const user = JSON.parse(localStorage.getItem("user"));
  const res = await axios.put(API_URL + /posts/ + formData._id, formData,{
    headers: {
      authorization: user?.token,
    }
  })
  if(res.data){
    getById()
  }
  return res.data;
}

const like = async (_id) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const res = await axios.put(API_URL + "/posts/like/"+_id,{}, {
        headers: {
          authorization: user?.token,
        },
      } );
      console.log(res.data)
    return res.data;
  }

const dislike = async(_id)=>{
  const user = JSON.parse(localStorage.getItem("user"));
  const res = await axios.put(API_URL + "/posts/dislike/"+_id,{},{
    headers: {
      authorization: user?.token,
    },
  })
  return res.data;
}
const postsService = {
  getAll,
  getById,
  like,
  dislike,
  createPost,
  insertComment,
  deletePost,
  getPostByName
};
export default postsService;