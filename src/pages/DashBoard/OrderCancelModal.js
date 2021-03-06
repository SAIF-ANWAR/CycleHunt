import React from 'react';
import { toast } from 'react-toastify';

const OrdereCancelModal = ({ order, refetch }) => {
    const handleDelete = (id) => {
        fetch(`https://fathomless-brushlands-38249.herokuapp.com/orders/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast.success("Order Cancelled")
                }
                refetch()
            })


    }
    return (
        <div>
            <input type="checkbox" id="cancel-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are you sure you want to delete?</h3>
                    <p> <span className='text-lg'>Item:</span>  <span className='text-xl font-bold'>{order?.productName}</span> </p>
                    <div className="modal-action">
                        <label onClick={() => handleDelete(order?._id)} for="cancel-modal" className="btn">Cancel Order</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrdereCancelModal;