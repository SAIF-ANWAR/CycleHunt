import React from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">Your Profile</h2>
                <p>Name: {user?.displayName} </p>
                <p>Email: {user?.email} </p>
                <input className='input input-bordered' type="text" name="address" id="" />
            </div>
        </div>
    );
};

export default MyProfile;