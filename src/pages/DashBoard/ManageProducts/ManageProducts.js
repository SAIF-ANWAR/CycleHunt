import React, { useState } from 'react';
import useProduct from '../../../hooks/useProduct';
import ManageProduct from './ManageProduct';
import ModalForDelete from './ModalForDelete';

const ManageProducts = () => {
    const [tools, setTools] = useProduct()

    const [modal, setModal] = useState()
    return (
        <div>
            <h1 className='text-4xl font-bold text-center pt-5 text-primary mb-6'>Products</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 mb-10 lg:gap-x-2 lg:gap-y-2 lg:px-12 place-items-center'>
                {
                    tools?.map(tool => <ManageProduct setModal={setModal} key={tool._id} tool={tool}></ManageProduct>)
                }
                {
                    modal && <ModalForDelete modal={modal} tools={tools} setTools={setTools} ></ModalForDelete>
                }
            </div>

        </div>
    );
};

export default ManageProducts;