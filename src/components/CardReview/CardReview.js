import React from 'react';
import './CardReview.css'

const CardReview = (props) => {

    const { name, review, rating, picture } = props.review
    return (
        <div className='reviewCart'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>{review}</p>
            <p>Rating : {rating}</p>
        </div>
    );
};

export default CardReview;