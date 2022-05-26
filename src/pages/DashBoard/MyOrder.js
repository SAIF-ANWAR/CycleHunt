import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const MyOrder = ({ order, refetch }) => {

    const handlePay = (id) => {
        const payment = "Paid"
        const url = `https://fathomless-brushlands-38249.herokuapp.com/orders/${id}`
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ payment })
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast.success("Paid Successfull")
                }
                refetch()
            })
    }
    return (
        <div>
            <div class="card bg-base-100 shadow-xl">
                <figure><img className='w-36 py-4 max-h-[11rem] min-h-[11rem] lg:max-h-[15rem] lg:min-h-[15rem]' src={order?.image} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">
                        Order Summary
                    </h2>
                    <p>Product: {order?.productName}</p>
                    <p>Ordered Quantity: {order?.orderedQuantity}</p>
                    <p>Email: {order?.email}</p>
                    <p>Phone Number: {order?.phone}</p>
                    <p>Shipping Address: {order?.address}</p>
                    <p>Payment Status: {order?.payment ? order?.payment : "Unpaid"} </p>
                    <p>Shipment : {order?.payment === "Paid" ? "On Process" : "Pendnig for payment"}</p>
                    <div class="card-actions justify-end">
                        {order?.payment === "Paid" ? <Link to="/trackOrder" class="btn btn-sm">Track Order</Link> : <button onClick={() => handlePay(order?._id)} class="btn btn-sm">Pay</button>}
                        <label for="cancel-modal" disabled={order?.payment === "Paid"} class="btn btn-sm modal-button">Cancel Order</label>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;