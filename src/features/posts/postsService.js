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

const like = async (_id) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const res = await axios.put(API_URL + "/posts/like/"+_id,{}, {
        headers: {
          authorization: user?.token,
        },
      } );
    return res.data;
  };

const postsService = {
  getAll,
  getById,
  like,
};

export default postsService;