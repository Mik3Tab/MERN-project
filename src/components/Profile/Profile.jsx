import { useEffect } from 'react';
import {useSelector} from 'react-redux';
import { myProfile } from '../../features/auth/authSlice';
import {useDispatch} from 'react-redux';
import './Profile.scss'
const Profile = () =>{
    const {userInfoProfile} = useSelector((state)=> state.auth);
    const dispatch = useDispatch();
    useEffect(async()=>{
        await dispatch(myProfile());
    },[])
    return (
        <div className="profile-container">
            <h2>Your profile</h2>
            <hr />
            <h2>User info</h2>

            <div className="card-profile">
                <div className="user-info">
                    <h2><strong>Nickname</strong></h2>
                    <p>{userInfoProfile.name}</p>
                    <h2><strong>Email</strong></h2>
                    <p>{userInfoProfile.email}</p>
                </div>
            </div>
            
        </div>
    );
};

export default Profile;