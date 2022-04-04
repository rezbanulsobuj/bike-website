import React from 'react';
import './ReviewPage.css'

const ReviewPage = (props) => {
    const { name, review, rating, picture, reviewname } = props.review
    return (
        <div className='reviewCart'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>Review Name : {reviewname}</p>
            <p>{review}</p>
            <p>Rating : {rating}</p>
        </div>
    );
};

export default ReviewPage;