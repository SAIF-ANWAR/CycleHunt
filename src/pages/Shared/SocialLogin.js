import React from 'react';
import auth from '../../firebase.init';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from './Loading';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';



const SocialLogin = () => {
    const [currentUser] = useAuthState(auth)
    const navigate = useNavigate()
    const location = useLocation()
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    let from = location.state?.from?.pathname || "/";
    if (gLoading) {
        return <Loading></Loading>
    }
    if (gError) {

        window.alert(`${gError.message}`)
    }
    if (gUser) {
        navigate(from, { replace: true });
    }
    const userName = currentUser?.displayName
    const userEmail = currentUser?.email
    let user = {
        userName,
        userEmail
    }

    const handleSocialLogIn = () => {
        signInWithGoogle()
        // const userName = gUser?.user?.displayName
        // const userEmail = gUser?.user?.email
        const userName = gUser?.user?.displayName
        const userEmail = gUser?.user?.email
        let user = {
            userName,
            userEmail
        }
        console.log(user)
        fetch(`https://fathomless-brushlands-38249.herokuapp.com/users`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div className='flex flex-col'>
            <div className="divider ">OR</div>
            <button onClick={handleSocialLogIn} className="btn btn-outline btn-success text-center">Continue with Google</button>
        </div>
    );
};

export default SocialLogin;