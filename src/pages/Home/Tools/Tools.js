import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return (
        <div>
            <h1 className='text-4xl font-bold text-center pt-10'>Tools</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 mb-10 lg:gap-x-2 lg:px-12'>
                {
                    tools.map(tool => <Tool key={tool.id} tool={tool}></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;