import React from 'react';
import { getReviews } from '../utils/api';
import { useState, useEffect } from 'react';

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
            <h2>{reviewObj.title}</h2>
            <h3>Review author: {reviewObj.owner}</h3>
            <h4>Review created: {singleReview.created_at}</h4>
            <h5>Game category: {reviewObj.category}</h5>
            <h5>Game designer: {singleReview.designer}</h5>
            <p>Body: {singleReview.review_body}</p>
            <p>Votes: {singleReview.votes}</p>
            <img src={reviewObj.review_img_url} alt={reviewObj.title}></img>
        </div>
    );
};

export default ReviewCard;