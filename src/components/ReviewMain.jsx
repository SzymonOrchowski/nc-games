import React from 'react';
import { formatDate } from '../utils/utils';

const ReviewMain = ({singleReview}) => {
    let dateToShow 
    if (!!singleReview.created_at) dateToShow = formatDate(singleReview.created_at, ['date'])

    return (
        <>
            <div className="review-main-title">
                <h2>{singleReview.title}</h2>
            </div>
            <div className="review-main-author">
                <h3>
                    posted by {singleReview.owner}
                </h3>
                <h4>
                    at {dateToShow}
                </h4>
            </div>
            <div className="review-main-game-category">
                <h5>game category: {singleReview.category}</h5>
                <h5>designed by: {singleReview.designer}</h5>
            </div>
            <div className="review-main-body">
                <div id="review-main-body-text">
                    <p>{singleReview.review_body}</p>
                </div>
                <div id='review-main-body-img'>
                    <img id="review-img" src={singleReview.review_img_url} alt={singleReview.title}></img>
                </div>
            </div>
            <div className="review-vote-footer">
                <p>Votes: {singleReview.votes}
                <span id="button-plus">
                    <button>+</button>
                </span>
                <span id="button-minus">
                    <button>-</button>
                </span>
                </p>
            </div>  
        </>
    );
};

export default ReviewMain;