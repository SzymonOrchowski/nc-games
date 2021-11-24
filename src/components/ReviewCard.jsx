import React from 'react';
import { getReviews } from '../utils/api';
import { useState, useEffect } from 'react';
import ReviewMain from './ReviewMain'
import ReviewComments from './ReviewComments'

const ReviewCard = ({reviewObj}) => {
    const review_id = reviewObj.review_id
    const [singleReview, setSingleReview] = useState({})
    
    useEffect(()=>{
        getReviews({
            review_id: review_id
        }).then((reviewFromServer)=>{
            setSingleReview(reviewFromServer)
        })
    },[review_id])

    return (
        <div className="review-card">
                <ReviewMain singleReview={singleReview} />
                <ReviewComments review_id={review_id} />
        </div>
    );
};

export default ReviewCard;