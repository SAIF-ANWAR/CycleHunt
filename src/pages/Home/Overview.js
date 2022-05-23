import React from 'react';
import { Link } from 'react-router-dom';
import audience from '../../photos/icons/audience.jpg';
import review from '../../photos/icons/review.jpg';
import revenue from '../../photos/icons/revenue.jpg'

const Overview = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-center pt-10 text-primary'>Overview</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 my-12 gap-x-2 px-12'>
                <div className="card card-side bg-base-100 shadow-xl px-3 flex flex-col items-center justify-center py-4" >
                    <figure className='px-3'><img className='max-h-60 rounded-lg py-2' src={audience} alt="help" /></figure>
                    <div className='text-center  py-6'>
                        <p className='text-3xl font-bold'>Served</p>
                        <small className='text-center text-2xl'><Link to="/comingSoon"> 10000 + Customers </Link></small>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl px-3 flex flex-col items-center justify-center py-4" >
                    <figure className='px-3'><img className='max-h-60 rounded-lg py-2' src={review} alt="help" /></figure>
                    <div className='text-center  py-6'>
                        <p className='text-3xl font-bold'>Reviews</p>
                        <small className='text-center text-2xl'><Link to="/comingSoon"> 2000 + </Link></small>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl px-3 flex flex-col items-center justify-center py-4" >
                    <figure className='px-3'><img className='max-h-60 rounded-lg py-2' src={revenue} alt="help" /></figure>
                    <div className='text-center  py-6'>
                        <p className='text-3xl font-bold'>Revenue</p>
                        <small className='text-center text-2xl'><Link to="/comingSoon">1000 k+ </Link></small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;