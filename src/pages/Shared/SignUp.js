import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from './Loading';
import banner from '../../photos/banner-2.jpg'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import SocialLogin from './SocialLogin';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }
    if (error || gError || updateError) {
        window.alert(`{error.message}`)
    }
    if (user || gUser) {
        toast.success("Created account successfully !")
    }
    const onSubmit = async data => {
        if (data.password !== data.confirmPassword) {
            window.alert("Password didn't match")
        }
        else {
            await createUserWithEmailAndPassword(data.email, data.password)
            await updateProfile({ displayName: data?.name })
            const userName = data?.name
            const userEmail = data?.email
            const user = {
                userName,
                userEmail
            }
            fetch('https://fathomless-brushlands-38249.herokuapp.com/users', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => console.log(data))
            navigate("/")
        }

    };

    return (
        <div style={{ background: `url(${banner})`, backgroundSize: 'cover' }} className='h-screen flex flex-col-1 justify-center items-center'>
            <div className="card  bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-2xl text-center font-bold">Create an account</h2>
                    <form className='min-w-full text-center' onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs my-3" {...register("name", { required: true })} />
                        <input type="email" placeholder="Type Email" className="input input-bordered w-full max-w-xs " {...register("email", { required: true })} />
                        <label className="label">
                            <p className='text-red-500'>{errors.email?.type === 'required' && "Email is required"}</p>
                        </label>
                        <input type="password" name='password' placeholder="Type password" className="input input-bordered w-full max-w-xs " {...register("password", { required: true })} />
                        <label className="label">
                            <p className='text-red-500'>{errors.password?.type === 'required' && "Password is required"}</p>
                        </label>
                        <input type="password" name='confirmPassword' placeholder="Confirm password" className="input input-bordered w-full max-w-xs " {...register("confirmPassword", { required: true })} />
                        <label className="label">
                            <p className='text-red-500'>{errors.confirmPassword?.type === 'required' && "Password didn't match"}</p>
                        </label>
                        <input className="btn btn-outline btn-success w-full max-w-xs my-2" type="submit" value="Sign Up" />
                    </form>
                    <small><p className='flex justify-between px-3 '>Already have an account ? <Link className='text-primary' to="/login">Log In</Link> </p></small>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
            <ToastContainer />
        </div>

    );
};

export default SignUp;