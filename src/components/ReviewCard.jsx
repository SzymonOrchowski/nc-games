import React from 'react';
import { getReviews } from '../utils/api';
import { useState, useEffect } from 'react';
import ReviewMain from './ReviewMain'
import ReviewComments from './ReviewComments'
import styled from 'styled-components';

const ReviewCard = ({review_id, isCommentsListLimited }) => {
    const [singleReview, setSingleReview] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [commentsLimit, setCommentsLimit] = useState(false)

    useEffect(()=>{
        setIsLoading(true)
        getReviews({
            review_id: review_id
        }).then((reviewFromServer)=>{
            isCommentsListLimited ? setCommentsLimit(1) : setCommentsLimit(reviewFromServer.comment_count)
            setSingleReview(reviewFromServer)
            setIsLoading(false)
        })
    },[review_id, isCommentsListLimited])

    const backgroundUrl = `url("${singleReview.review_img_url}")`

    return (isLoading ? null :
        <StyledReviewCard background={backgroundUrl}>
            <div className="review-card">
                    <ReviewMain singleReview={singleReview} />
                    <ReviewComments review_id={review_id} limit={commentsLimit} />
            </div>
        </StyledReviewCard>
    );
};

export default ReviewCard;

const StyledReviewCard = styled.div((props) => ({
    'background': props.background,
}))
