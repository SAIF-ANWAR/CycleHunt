import React from 'react';

const ModalForDelete = ({ tool, setTools }) => {
    const handleDelete = (id) => {
        const url = `https://fathomless-brushlands-38249.herokuapp.com/parts/${id}`
        console.log(url)
        // fetch(`https://fathomless-brushlands-38249.herokuapp.com/parts/${id}`)
        //     .then(res => res.json())
        //     .then(data => console.log(data))
    }

    return (
        <div>
            <input type="checkbox" id="delete-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure you want to delete?   </h3>
                    <div class="modal-action">
                        <label onClick={() => handleDelete(tool?._id)} for="delete-modal" class="btn">Delete Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalForDelete;