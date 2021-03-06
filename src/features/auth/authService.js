import axios from 'axios';
const API_URL = "http://localhost:3001";

const register = async (userData) =>{
    console.log('eee')
    const res = await axios.post(API_URL + '/users/register', userData);
    return res.data;
};

const login = async(userData) =>{
    const res = await axios.post(API_URL + '/users/login', userData);
    if(res.data){
        localStorage.setItem('user', JSON.stringify(res.data));
    }
    return res.data
}

const myProfile = async()=>{
    const user = JSON.parse(localStorage.getItem('user'));
    const res = await axios.get(API_URL+'/users/getCurrentUser',{
        headers:{
            authorization: user?.token
        }
    })
    return res.data;
}

const logout = async(userData)=>{
    const user = JSON.parse(localStorage.getItem("user"));
    const res = axios.put(API_URL + "/users/logout",{}, {
        headers:{
            authorization: user?.token,
        },
    });
    if(res){
        localStorage.removeItem("user");    
    }
    return res.data;
}

const authService = {
    register,
    login,
    logout,
    myProfile
};

export default authService;