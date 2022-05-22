import React from 'react';
import banner from '../../photos/bacground-banner.jpg'
import PrimaryButton from '../Shared/PrimaryButton';
const Banner = () => {
    return (
        <div class="hero min-h-screen" style={{ background: `url(${banner})`, backgroundSize: 'cover' }}>
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">Cycle Hunt</h1>
                    <p class="mb-5">The most trusted BiCycle parts Shop   <br /> You will find all kinds of parts for your bike stores here!! </p>
                    <PrimaryButton>Learn More</PrimaryButton>
                </div>
            </div>
        </div>

    );
};

export default Banner;
