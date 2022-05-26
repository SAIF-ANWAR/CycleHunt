import React from 'react';
import { toast } from 'react-toastify';

const ModalForDelete = ({ tools, modal, setTools }) => {

    const handleDelete = () => {
        const url = (`https://fathomless-brushlands-38249.herokuapp.com/parts/${modal}`)
        fetch(url, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success("Deleted Successfully")
                }
                const remainingItems = tools?.filter(tool => tool._id !== modal)
                setTools(remainingItems)
            })

    }

    return (
        <div>
            <input type="checkbox" id="delete-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are you sure you want to delete?   </h3>
                    <div className="modal-action">
                        <label onClick={handleDelete} htmlFor="delete-modal" className="btn">Delete Now</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ModalForDelete;