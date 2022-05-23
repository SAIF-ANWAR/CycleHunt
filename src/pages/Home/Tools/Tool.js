import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../Shared/PrimaryButton';

const Tool = ({ tool }) => {
    const { name, description, quantity, minOrder, img, price } = tool
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='w-48 py-4' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title"> {name} </h2>
                <p> {description} </p>
                <p>Price/piece: ${price} </p>
                <p>Available Quantity: {quantity} </p>
                <p> MOQ: {minOrder} </p>
                <div className="card-actions justify-end">
                    <Link to="/purchase"><PrimaryButton>Order Now</PrimaryButton></Link>
                </div>
            </div>
        </div>
    );
};

export default Tool;