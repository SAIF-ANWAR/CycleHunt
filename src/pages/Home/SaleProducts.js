import React from 'react';
import useProduct from '../../hooks/useProduct';
import SaleProduct from './SaleProduct';

const SaleProducts = () => {
    const [tools] = useProduct()
    return (
        <div>
            <h1 className='text-4xl font-bold text-center pt-10 text-primary my-6'> ON SALE !!!</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 mb-10 lg:gap-x-2 lg:gap-y-2 lg:px-12 place-items-center'>
                {
                    tools.slice(3, 6).map(tool => <SaleProduct key={tool._id} tool={tool}></SaleProduct>)
                }
            </div>

        </div>
    );
};

export default SaleProducts;