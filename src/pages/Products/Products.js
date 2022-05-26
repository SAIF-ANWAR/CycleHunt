import React from 'react';
import useProduct from '../../hooks/useProduct';
import Tool from '../Home/Tools/Tool';

const Products = () => {
    const [tools] = useProduct()
    return (
        <div>
            <h1 className='text-4xl font-bold text-center pt-5 text-primary mb-6'>Products</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 mb-10 lg:gap-x-2 lg:gap-y-2 lg:px-12 place-items-center'>
                {
                    tools.map(tool => <Tool key={tool._id} tool={tool}></Tool>)
                }
            </div>
        </div>
    );
};

export default Products;