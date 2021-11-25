import React from 'react';
import { getReviews } from '../utils/api';
import { useState, useEffect } from 'react';
import ReviewMain from './ReviewMain'
import ReviewComments from './ReviewComments'
import styled from 'styled-components';

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

    const backgroundUrl = `url("${singleReview.review_img_url}")`

    return (
        <StyledReviewCard background={backgroundUrl}>
            <div className="review-card">
                    <ReviewMain singleReview={singleReview} />
                    <ReviewComments review_id={review_id} />
            </div>
        </StyledReviewCard>
    );
};

export default ReviewCard;

const StyledReviewCard = styled.div((props) => ({
    'background': props.background,
}))
