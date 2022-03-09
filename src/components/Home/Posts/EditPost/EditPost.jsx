import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import {useDispatch } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getById, updatePost } from "../../../../features/posts/postsSlice"
const EditPost = () => {
    const {_id} = useParams();
    const dispatch = useDispatch();
    const { post } = useSelector((state)=> state.post);
    const [formData, setFormData] = useState({title:" ", description:" ", _id});
    const {title, description} = formData;
    const navigate = useNavigate();
    useEffect(()=>{
        dispatch(getById(_id))
    },[])
    const onChange = (event) => {
        setFormData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    }
    const onSubmit = (event) =>{
        event.preventDefault();
        dispatch(updatePost(formData))
        setFormData({title:" ", description:" ", _id})
        navigate("/home");
    }
    useEffect(()=>{
        setFormData({title: post.title,description: post.description, _id})
    },[post.title, post.description]);
  return (
    <div>Aquí va la carta con el post a modificar</div> 
  )
}

export default EditPost