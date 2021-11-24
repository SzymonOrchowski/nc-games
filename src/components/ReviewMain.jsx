import React from 'react';

const ReviewMain = ({singleReview}) => {
    return (
        <>
            <div className="review-main-title">
                <h2>{singleReview.title}</h2>
            </div>
            <div className="review-main-author">
                <h3>By {singleReview.owner}</h3>
                <h4>Posted {singleReview.created_at}</h4>
            </div>
            <div className="review-main-game-category">
                <h5>Game category: <br/>{singleReview.category}</h5>
                <h5>Designed by: {singleReview.designer}</h5>
            </div>
            <div className="review-main-body">
                <img id='review-img' src={singleReview.review_img_url} alt={singleReview.title}></img>
                <p>{singleReview.review_body}</p>
            </div>
            <div className="review-vote-footer">
                <p>Votes: {singleReview.votes} 
                <button>+</button>
                <button>-</button>
                </p>
            </div>  
        </>
    );
};

export default ReviewMain;