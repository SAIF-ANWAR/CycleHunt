import React from 'react';
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
    const handleDelete = (id) => {
        const proceed = window.confirm("Are You sure")
        if (proceed) {
            fetch(`https://fathomless-brushlands-38249.herokuapp.com/orders/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged === true) {
                        toast.success("Order Cancelled")
                    }
                    refetch()
                    console.log(data)
                })
        }

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
                    <p>Ordered Quantity: {order?.orderedQuantity}</p>
                    <p>Email: {order?.email}</p>
                    <p>Phone Number: {order?.phone}</p>
                    <p>Shipping Address: {order?.address}</p>
                    <p>Payment Status: {order?.payment ? order?.payment : "Pending"} </p>
                    <p>Shipment : {order?.payment === "Paid" ? "On Process" : "Pendnig for payment"}</p>
                    <div class="card-actions justify-end">
                        <button onClick={() => handlePay(order?._id)} class="btn btn-sm">Pay</button>
                        <button onClick={() => handleDelete(order?._id)} disabled={order?.payment === "Paid"} class="btn btn-sm">Cancel Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;