import React from 'react';

const ReviewDetail = ({ review }) => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <div class="avatar">
                    <div class="w-24 rounded-xl">
                        <img src="https://api.lorem.space/image/face?hash=64318" />
                    </div>
                </div>
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title"> { } </h2>
                <p>"{review?.review}"</p>
                <p>Ratng: {review?.rating} out of 5 </p>
                <p>Reviewed By: {review?.name}</p>
            </div>
        </div>
    );
};

export default ReviewDetail;