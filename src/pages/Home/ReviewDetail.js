import React from 'react';

const ReviewDetail = ({ review }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <div className="avatar">
                    <div className="w-24 rounded-xl">
                        <img src="https://api.lorem.space/image/face?hash=64318" alt='' />
                    </div>
                </div>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-bold"> {review?.name} </h2>
                <p>"{review?.review}"</p>
                <p><span className='font-bold'>Ratng:</span> {review?.rating} out of 5 </p>
            </div>
        </div>
    );
};

export default ReviewDetail;