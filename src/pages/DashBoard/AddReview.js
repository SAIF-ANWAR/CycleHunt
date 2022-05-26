import React from 'react';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';


const AddReview = () => {
    const [user, loading, error] = useAuthState(auth);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('https://fathomless-brushlands-38249.herokuapp.com/reviews', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast.success("Thanks for your review")
                }
            })
        console.log(data)
    };

    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl p-6">
                <form className='card-body items-center text-center' onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='text-3xl font-bold'>AddReview</h1>
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
                            <span class="label-text">Rating (out of 5)</span>
                        </label>
                        <input type="text" class="input input-bordered w-full max-w-xs" {...register("rating")} />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Write Your Review</span>
                        </label>
                        <textarea placeholder="Type here" class="input input-bordered w-full max-w-xs" {...register("review", { required: true })} />
                        <label class="label">
                            <span class="label-text-alt">{errors.review && <span className='text-red-500'>Please write review</span>}</span>
                        </label>
                    </div>
                    <input className='btn btn-active btn-ghost' type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default AddReview;