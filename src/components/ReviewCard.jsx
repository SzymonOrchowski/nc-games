import React from 'react';

const ReviewCard = ({reviewObj}) => {
    return (
        <div className="review-card">
            <h2>{reviewObj.title}</h2>
            <h3>Author: {reviewObj.owner}</h3>
            <p>{reviewObj.review_body}</p>
            <p>{reviewObj.review_body}</p>
            <p>{reviewObj.review_body}</p>
            <p>{reviewObj.review_body}</p>
            <img src={reviewObj.review_img_url}></img>
        </div>
    );
};

export default ReviewCard;