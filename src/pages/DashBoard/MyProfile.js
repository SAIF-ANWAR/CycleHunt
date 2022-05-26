import React from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

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
        console.log(data)
    }
    return (
        <div className='flex flex-col'>
            <div class="card w-96 bg-base-100 shadow-xl ">
                <form className='card-body items-center text-center' onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='text-3xl font-bold'>Create Profile</h1>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Your Name</span>
                        </label>
                        <input type="text" value={user?.displayName} placeholder="Type here" class="input input-bordered w-full max-w-xs" {...register("name")} />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Your Email</span>
                        </label>
                        <input type="email" defaultValue={user?.email} class="input input-bordered w-full max-w-xs" {...register("email")} />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Social Media Link (Facebook or LinkedIN)</span>
                        </label>
                        <input type="text" class="input input-bordered w-full max-w-xs" {...register("socialMedia")} />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Phone Number</span>
                        </label>
                        <input type="text" class="input input-bordered w-full max-w-xs" {...register("phone")} />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Address</span>
                        </label>
                        <textarea placeholder="Type here" class="input input-bordered w-full max-w-xs" {...register("address", { required: true })} />
                        <label class="label">
                            <span class="label-text-alt">{errors.address && <span className='text-red-500'>Please provide address</span>}</span>
                        </label>
                    </div>
                    <input className='btn btn-active btn-ghost' type="submit" value="Add" />
                </form>
            </div>
            <div className='p-5'>
                <h1 className='text-3xl font-bold'>Profile</h1>
                <div class="overflow-x-auto">
                    <table class="table table-compact w-full">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Social Media</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {/* <td>{userProfile?.name}</td>
                                <td>{userProfile?.name}</td>
                                <td>{userProfile?.name}</td>
                                <td>{userProfile?.name}</td>
                                <td>{userProfile?.name}</td> */}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
export default MyProfile;