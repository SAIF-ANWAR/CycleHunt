import React from 'react';

const ManageProduct = ({ tool }) => {
    const { name, description, quantity, minOrder, img, price } = tool


    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className='w-40 py-4 max-h-[11rem] min-h-[11rem] lg:max-h-[16rem] lg:min-h-[15rem]' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title"> {name} </h2>
                <p> {description} </p>
                <p>Price/piece: ${price} </p>
                <p>Available Quantity: {quantity <= 0 ? "Stock Out" : quantity} </p>
                <p> MOQ: {minOrder} </p>
                <div className="card-actions justify-end">
                    <label for="delete-modal" class="btn btn-sm modal-button">Delete Product</label>
                    {/* <button className='btn btn-outline' onClick={() => handleOrder(tool._id)}>Delete</button> */}
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;