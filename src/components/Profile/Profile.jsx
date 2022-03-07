import {useSelector} from 'react-redux';
import './Profile.scss'
const Profile = () =>{
    const {user} = useSelector((state)=> state.auth);
    console.log('user', user)
    return (
        <div className="profile">
            <h2>Your profile</h2>
            <hr />
                <div className="userInfo">
                    <p>{user.user.name}</p>
                    <p>{user.user.email}</p>
                </div>
        </div>
    );
};

export default Profile;