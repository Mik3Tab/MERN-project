import {useSelector} from 'react-redux';
import './Profile.scss'
const Profile = () =>{
    const {user} = useSelector((state)=> state.auth);
    return (
        <div className="profile-container">
            <h2>Your profile</h2>
            <hr />
            <h2>User info</h2>
            <div className="card-profile">
                <div className="user-info">
                    <h2><strong>Nickname</strong></h2>
                    <p>{user.user.name}</p>
                    <h2><strong>Email</strong></h2>
                    <p>{user.user.email}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;