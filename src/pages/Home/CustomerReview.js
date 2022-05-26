import React, { useEffect, useState } from 'react';
import ReviewDetail from './ReviewDetail';

const CustomerReview = () => {
    const [reviews, setReview] = useState([])

    useEffect(() => {
        fetch('https://fathomless-brushlands-38249.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])

    return (
        <div>
            <h2 className='text-4xl font-bold text-center pt-10 text-primary mb-3'>Customers' Feedback</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 px-12'>
                {
                    reviews.map(review => <ReviewDetail key={review._id} review={review}></ReviewDetail>)
                }
            </div>
        </div>
    );
};

export default CustomerReview;