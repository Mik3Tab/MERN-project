import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {register,reset} from '../../features/auth/authSlice'
import { notification } from "antd";
import { useNavigate } from "react-router-dom";
import "antd/dist/antd.css";
import "./Register.scss";
const Register = () => {
    const [formData, setFormData] = useState({ name: "",email: "",password: "",password2: "", });
    const { name, email, password, password2 } = formData;
    const dispatch = useDispatch()
    const navigate = useNavigate();
        const { isError, isSuccess, message } = useSelector( (state) => state.auth )
    useEffect(() => {
      if (isError) {
        notification.error({ message: "Error",description: message.msg });
      }
      if (isSuccess) {
          notification.success({  message: "Success",  description:message?.message});
          setTimeout(() => {
            navigate("/login");
        }, 1000);
        }
        dispatch(reset())
    }, [isError, isSuccess, message,  navigate,dispatch]);
  
    const onChange = (event)=>{
        setFormData((prevState)=> ({
            ...prevState,
            [event.target.name]:event.target.value,
        }))
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if (password !== password2) {
          return notification.error({message: "Error", description: "Passwords do not match",});
        } else {
            dispatch(register(formData));
            setTimeout(() => {
              navigate("/login");
            }, 1000);
            return notification.success({message:"Bienvenido",description:"Te has registrado correctamente"});
        }
      };
    
    return(
      <div>
        <h1>Register</h1>
        <form onSubmit={onSubmit}>
            <input type="text" name="name" placeholder="name" value={name} onChange={onChange}/>
            <input type="email" name="email" placeholder="email" value={email} onChange={onChange}/>
            <input type="password" name="password" placeholder="password" value={password} onChange={onChange}/>
            <input type="password" name="password2" placeholder="repeat password" value={password2} onChange={onChange}/>            
            <button type="submit" >Register</button>
        </form>
      </div>
    )
}

export default Register;