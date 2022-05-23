import React from 'react';
import help from '../../photos/icons/audience.jpg'
import PrimaryButton from '../Shared/PrimaryButton';

const Purchase = () => {
    const handleOrder = event => {
        event.preventDefault()
        const name = event.target.name?.value
        const email = event.target.email?.value
        const quantity = event.target.quantity?.value
        const address = event.target.address?.value
        console.log(name, email, quantity, address)
        event.target.reset()
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content w-2/3 flex-col lg:flex-row-reverse justify-items-center">
                    <div className="text-center lg:text-left">
                        <img className='max-h-64' src={help} alt="" />
                        <p>Available Quantity: 122</p>
                        <p>Price: $ 12</p>
                        <p>Shipping Cost: 12</p>
                        <p>Total Cost: 2000</p>
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                        {/* <h1 className="text-4xl font-bold text-center mt-2">Place Order</h1> */}
                        <div>
                            <form onSubmit={handleOrder}>
                                <div className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Your Name</span>
                                        </label>
                                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Your Email</span>
                                        </label>
                                        <input type="email" name="email" placeholder="Your Name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Product Quantity <small>( MOQ : 20 )</small></span>
                                        </label>
                                        <input type="number" defaultValue="20" name="quantity" placeholder="Your Name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Shipping Address</span>
                                        </label>
                                        <input type="text" name="address" placeholder="Address" className="input input-bordered" />
                                    </div>
                                    <div className="form-control mt-5">
                                        <PrimaryButton>Order</PrimaryButton>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;