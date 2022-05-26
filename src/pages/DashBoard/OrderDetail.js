import React, { useState } from 'react';

const OrderDetail = ({ order }) => {
    const [shipment, setShipment] = useState(false)

    const handleShipment = () => {
        setShipment(!shipment)

    }
    return (
        <div>
            <div class="card bg-base-100 shadow-xl">
                <figure><img className='w-40 py-4 max-h-[11rem] min-h-[11rem] lg:max-h-[16rem] lg:min-h-[15rem]' src={order?.image} alt="Shoes" /></figure>
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
                    <p>Shipment: {shipment ? "Shipped" : "Pending"} </p>
                    <div class="card-actions justify-end">
                        <button onClick={handleShipment} class="btn btn-sm">Shipped</button>
                        <label for="cancel-modal" class="btn btn-sm modal-button">Cancel Order</label>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetail;