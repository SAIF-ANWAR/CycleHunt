import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from './Loading';
import SocialLogin from './SocialLogin';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    if (loading || gLoading) {
        return <Loading></Loading>
    }
    if (error || gError) {

        window.alert(`${error.message || gError.message}`)
    }
    if (user || gUser) {
        navigate(from, { replace: true });
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)

    };
    return (
        <div className='flex flex-col-1 justify-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-2xl text-center font-bold">Please Log In</h2>
                    <form className='min-w-full text-center' onSubmit={handleSubmit(onSubmit)}>
                        <input type="email" placeholder="Type Email" className="input input-bordered w-full max-w-xs my-2" {...register("email", { required: true })} />
                        <label className="label">
                            <p className='text-red-500'>{errors.email?.type === 'required' && "Email is required"}</p>
                        </label>
                        <input type="password" placeholder="Type password" className="input input-bordered w-full max-w-xs" {...register("password", { required: true })} />
                        <label className="label">
                            <p className='text-red-500'>{errors.password?.type === 'required' && "Password is required"}</p>
                        </label>
                        <input className="btn btn-outline btn-success w-full max-w-xs my-2" type="submit" value="Log In" />
                    </form>
                    <small><p className='flex justify-between px-3 '>New to this site ? <Link className='text-primary' to="/signup">Sign Up</Link> </p></small>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>

    );
};

export default Login;