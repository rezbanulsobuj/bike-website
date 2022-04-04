import React from 'react';
import useProduct from '../../hook/useProduct';
import ReviewPage from '../ReviewPage/ReviewPage';
import './Reviews.css'

const Reviews = () => {
    const [review, setReview] = useProduct()
    return (
        <div className='order-review'>
            {
                review.map(review => <ReviewPage review={review}></ReviewPage>)
            }
        </div>
    );
};

export default Reviews;