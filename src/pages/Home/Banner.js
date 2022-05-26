import React from 'react';
import banner from '../../photos/bacground-banner.jpg'
import PrimaryButton from '../Shared/PrimaryButton';
const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ background: `url(${banner})`, backgroundSize: 'cover' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5  "><span className='text-5xl font-bold'>Cycle</span> <span className='text-purple-700 font-bold text-6xl'>Hunt</span></h1>
                    <p className="mb-5">The most trusted BiCycle parts Shop   <br /> You will find all kinds of parts for your bike stores here!! </p>
                    <PrimaryButton>Learn More</PrimaryButton>
                </div>
            </div>
        </div>

    );
};

export default Banner;
