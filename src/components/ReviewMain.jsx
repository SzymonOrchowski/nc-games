import React from 'react';

const ReviewMain = ({singleReview}) => {
    return (
        <div>
            <h2>{singleReview.title}</h2>
            <h3>Review author: {singleReview.owner}</h3>
            <h4>Review created: {singleReview.created_at}</h4>
            <h5>Game category: {singleReview.category}</h5>
            <h5>Game designer: {singleReview.designer}</h5>
            <p>Body: {singleReview.review_body}</p>
            <p>Votes: {singleReview.votes}</p>
            <img src={singleReview.review_img_url} alt={singleReview.title}></img>
        </div>
    );
};

export default ReviewMain;