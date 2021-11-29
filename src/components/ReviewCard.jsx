import React from 'react';
import { getReviews } from '../utils/api';
import { useState, useEffect } from 'react';
import ReviewMain from './ReviewMain'
import ReviewComments from './ReviewComments'
import styled from 'styled-components';

const ReviewCard = ({reviewObj}) => {
    const review_id = reviewObj.review_id
    const [singleReview, setSingleReview] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        setIsLoading(true)
        getReviews({
            review_id: review_id
        }).then((reviewFromServer)=>{
            setSingleReview(reviewFromServer)
            setIsLoading(false)
        })
    },[review_id])

    const backgroundUrl = `url("${singleReview.review_img_url}")`

    return (isLoading ? null :
        <StyledReviewCard background={backgroundUrl}>
            <div className="review-card">
                    <ReviewMain singleReview={singleReview} />
                    <ReviewComments review_id={review_id} limit={1}/>
            </div>
        </StyledReviewCard>
    );
};

export default ReviewCard;

const StyledReviewCard = styled.div((props) => ({
    'background': props.background,
}))
