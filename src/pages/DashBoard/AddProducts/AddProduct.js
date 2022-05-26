import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        fetch('https://fathomless-brushlands-38249.herokuapp.com/parts', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast.success("Product successfully added")
                    navigate('/manageProducts')
                }
            })

    }
    return (
        <div className='w-full'>
            <div class="card w-full bg-base-100 shadow-xl ">
                <form className='card-body items-center text-center' onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='text-3xl font-bold'>Add New Product</h1>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Product Name</span>
                        </label>
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" {...register("name", { required: true })} />
                        <label class="label">
                            <span class="label-text-alt">{errors.name && <span className='text-red-500'>Please provide Name</span>}</span>
                        </label>
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Image (link)</span>
                        </label>
                        <input type="text" class="input input-bordered w-full max-w-xs" {...register("img", { required: true })} />
                        <label class="label">
                            <span class="label-text-alt">{errors.img && <span className='text-red-500'>Please provide Image</span>}</span>
                        </label>
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Details</span>
                        </label>
                        <input type="text" class="input input-bordered w-full max-w-xs" {...register("description", { required: true })} />
                        <label class="label">
                            <span class="label-text-alt">{errors.description && <span className='text-red-500'>Please provide details</span>}</span>
                        </label>
                    </div>

                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Quantity</span>
                        </label>
                        <input type="number" class="input input-bordered w-full max-w-xs" {...register("quantity", { required: true })} />
                        <label class="label">
                            <span class="label-text-alt">{errors.quantity && <span className='text-red-500'>Please provide Quantity</span>}</span>
                        </label>
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Min Order</span>
                        </label>
                        <input type="number" class="input input-bordered w-full max-w-xs" {...register("minOrder", { required: true })} />
                        <label class="label">
                            <span class="label-text-alt">{errors.minOrder && <span className='text-red-500'>Please provide minOrder</span>}</span>
                        </label>
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Price</span>
                        </label>
                        <input type="number" class="input input-bordered w-full max-w-xs" {...register("price", { required: true })} />
                        <label class="label">
                            <span class="label-text-alt">{errors.price && <span className='text-red-500'>Please provide price</span>}</span>
                        </label>
                    </div>

                    <input className='btn btn-active btn-ghost w-32' type="submit" value="Add" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;