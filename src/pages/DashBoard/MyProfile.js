import React from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth);
    const { register, handleSubmit, formState: { errors } } = useForm();

    if (loading) {
        return <Loading></Loading>
    }
    const onSubmit = data => {
        fetch('https://fathomless-brushlands-38249.herokuapp.com/profiles', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast.success('Profile Updated')
                }
            })
    }
    return (
        <div className='flex flex-col'>
            <div className="card w-96 bg-base-100 shadow-xl ">
                <form className='card-body items-center text-center' onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='text-3xl font-bold'>Create Profile</h1>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" value={user?.displayName} placeholder="Type here" className="input input-bordered w-full max-w-xs" {...register("name")} />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="email" defaultValue={user?.email} className="input input-bordered w-full max-w-xs" {...register("email")} />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Social Media Link (Facebook or LinkedIN)</span>
                        </label>
                        <input type="text" className="input input-bordered w-full max-w-xs" {...register("socialMedia")} />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input type="text" className="input input-bordered w-full max-w-xs" {...register("phone")} />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <textarea placeholder="Type here" className="input input-bordered w-full max-w-xs" {...register("address", { required: true })} />
                        <label className="label">
                            <span className="label-text-alt">{errors.address && <span className='text-red-500'>Please provide address</span>}</span>
                        </label>
                    </div>
                    <input className='btn btn-active btn-ghost' type="submit" value="Add" />
                </form>
            </div>
        </div>
    );
};
export default MyProfile;