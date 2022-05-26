import React from 'react';

const OrderDetail = ({ order }) => {

    const handleShipment = () => {

    }
    return (
        <div>
            <div class="card bg-base-100 shadow-xl">
                <figure><img className='w-48 py-4' src={order?.image} alt="Shoes" /></figure>
                <div class="card-body">

                    <h2 class="card-title">
                        Order Summary
                    </h2>
                    <p>Product: {order?.productName}</p>
                    <p>Toal Quantity: {order?.orderedQuantity}</p>
                    <p>Email: {order?.email}</p>
                    <p>Phone Number: {order?.phone}</p>
                    <p>Shipping Address: {order?.address}</p>
                    <p>Payment : {order?.payment ? order?.payment : "Unpaid"} </p>
                    <p>Status: { } </p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-sm">Shipped</button>
                        <button class="btn btn-sm">Cancel Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetail;