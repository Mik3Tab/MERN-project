import {useSelector} from 'react-redux';
import './Profile.scss'
const Profile = () =>{
    const {user} = useSelector((state)=> state.auth);
    console.log('user', user)
    return (
        <div>
            <h2>Your profile</h2>
            <hr />
            <h2>User info</h2>
            <div className="card-profile">
                <div className="user-info">
                    <p>{user.user.name}</p>
                    <p>{user.user.email}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;