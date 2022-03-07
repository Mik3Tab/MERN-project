import {Link, useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {logout} from "../../features/auth/authSlice";
import {useState} from 'react';
import './Header.scss';

const Header = () =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.auth);
    const [text, setText] = useState("");
    const handleChange = (event) =>{
        setText(event.target.value);
        if(event.key === "Enter"){
            navigate('/search/' + text);
        }
    };
        const onLogout = (event) =>{
        event.preventDefault();
        dispatch(logout());
        navigate("/login");
    };
    return(
        <nav>
        <div className="header">
          {user ? (
            <>
              <span>
              <Link to="/profile" className="link">{user.user.name}</Link>
              </span>
        <input onKeyUp={handleChange} placeholder="Search user" name="text" className="search" />
              <span>
              </span>
              <Link to="/home" className="link">Home</Link>{" "}
              <span>
                <Link to="/" onClick={onLogout} className="link">
                  Logout
                </Link>
              </span>
            </>
          ) : (
            <>
              <span>
                <Link to="/login">Login</Link>
              </span>
              <span>
                <Link to="/register">Register</Link>
              </span>
            </>
          )}
          {user?.user.rol === "admin" ? (
            <span>
              <Link to="/admin">Admin</Link>
            </span>
          ) : (
            ""
          )}
        </div>
      </nav>
        
    );
}

export default Header;