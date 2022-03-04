import {useSelector} from 'react-redux';
const Profile = () =>{
    const {user} = useSelector((state)=> state.auth);
    console.log('user', user)
    return (
        <div className="profile">
        <h1>Profile</h1>
        <h2>Your profile</h2>
        <div className="userInfo">
            <p>{user.user.name}</p>
            <p>{user.user.email}</p>
        </div>
    </div>
    );
};

export default Profile;