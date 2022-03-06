import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, reset } from "../../features/auth/authSlice";
import { notification } from "antd";
import "antd/dist/antd.css";
import './Login.scss';

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: ""});
  const { email, password } = formData;
  const navigate = useNavigate();
  const { isError, isSuccess, message } = useSelector((state) => state.auth);
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const dispatch = useDispatch();
  useEffect(() => {
    if (isError) {
      notification.error({  message: "Error", description: message, });
    }
    if (isSuccess) {
      notification.success({  message: "Success", description: message?.message,  });
    }
    dispatch(reset())
  }, [isError, isSuccess, message, navigate, dispatch]);
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
    setTimeout(() => {
      navigate("/home");
    }, 1000);
  };

    return(
    <div className="mainLogin">
      <h1>Login</h1>
        <form onSubmit={onSubmit}>
            <input type="email" name="email" placeholder="email" value={email} onChange={onChange}/>
            <input type="password" name="password" placeholder="password" value={password} onChange={onChange}/>
            <button type="submit">Login</button>
        </form>
    </div>
    )
}

export default Login;