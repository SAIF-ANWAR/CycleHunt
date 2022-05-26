import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
    const { _id, name, description, quantity, minOrder, img, price } = tool
    const navigate = useNavigate()

    const handleOrder = (id) => {

        navigate(`/purchase/${id}`)

    }
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='w-40 py-4 max-h-[11rem] min-h-[11rem] lg:max-h-[16rem] lg:min-h-[15rem]' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title"> {name} </h2>
                <p> {description} </p>
                <p>Price/piece: ${price} </p>
                <p>Available Quantity: {quantity <= 0 ? "Stoc Out" : quantity} </p>
                <p> MOQ: {minOrder} </p>
                <div className="card-actions justify-end">
                    <button className='btn btn-outline' onClick={() => handleOrder(tool._id)}>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;