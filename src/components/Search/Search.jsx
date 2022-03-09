import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {getPostByName} from "../../features/posts/postsSlice";
import Post from "../Home/Posts/Post/Post";
import "./Search.scss"
const Search = () =>{
    const {title} = useParams();
    const dispatch = useDispatch();
    useEffect(()=>{
        console.log(title)
        dispatch(getPostByName(title));
    },[title]);
    return <div clasName="search-container">
        <h2>Resultados de la búsqueda:</h2>
        <Post/>
        </div>
}
export default Search;