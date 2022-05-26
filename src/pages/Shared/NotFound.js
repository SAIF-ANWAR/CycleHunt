import React from 'react';
import notFound from '../../photos/notFound.jpg'

const NotFound = () => {
    return (
        <div>
            <img className='w-full mx-auto h-screen' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;