import React from 'react';
import { Link } from 'react-router-dom';
import useProduct from '../../../hooks/useProduct';
import PrimaryButton from '../../Shared/PrimaryButton';
import Tool from './Tool';

const Tools = () => {
    const [tools] = useProduct()
    return (
        <div>
            <h1 className='text-4xl font-bold text-center pt-10 text-primary my-8'>Tools</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 mb-10 lg:gap-x-2 lg:gap-y-2 lg:px-12 place-items-center'>
                {
                    tools.slice(0, 6).map(tool => <Tool key={tool._id} tool={tool}></Tool>)
                }
            </div>
            <Link to="/allProducts" className='flex justify-end pr-16'>
                <PrimaryButton>See All Products</PrimaryButton>
            </Link>


        </div>
    );
};

export default Tools;