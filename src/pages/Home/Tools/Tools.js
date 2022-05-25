import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import useProduct from '../../../hooks/useProduct';
import Loading from '../../Shared/Loading';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useProduct()
    // const { data: tools, isLoading, refetch } = useQuery('users', () => fetch('https://fathomless-brushlands-38249.herokuapp.com/parts')).then(res => res.json())
    // // if (isLoading) {
    //     return <Loading></Loading>
    // }
    // useEffect(() => {
    //     fetch('https://fathomless-brushlands-38249.herokuapp.com/parts')
    //         .then(res => res.json())
    //         .then(data => setTools(data))
    // }, [])
    return (
        <div>
            <h1 className='text-4xl font-bold text-center pt-10 text-primary'>Tools</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 mb-10 lg:gap-x-2 lg:px-12'>
                {
                    tools.map(tool => <Tool key={tool._id} tool={tool}></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;