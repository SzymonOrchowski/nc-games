import React from 'react';
import { getReviews } from '../utils/api';
import { useState, useEffect } from 'react';

const ReviewCard = ({reviewObj}) => {
    const [singleReview, setSingleReview] = useState({})
    
    useEffect(()=>{
        getReviews({
            review_id: reviewObj.review_id
        }).then((reviewFromServer)=>{
            setSingleReview(reviewFromServer)
        })
    },[])

    return (
        <div className="review-card">
            <h2>{reviewObj.title}</h2>
            <h3>Author: {reviewObj.owner}</h3>
            <h4>Category: {reviewObj.category}</h4>
            <p>{singleReview.review_body}</p>
            <img src={reviewObj.review_img_url} alt={reviewObj.title}></img>
        </div>
    );
};

export default ReviewCard;