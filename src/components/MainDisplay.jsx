import React from 'react';
import MainDisplayHeader from './MainDisplayHeader';
import ReviewCard from './ReviewCard';
import { useState, useEffect } from 'react';
import { getReviews } from '../utils/api';
import { useParams } from 'react-router-dom';

const MainDisplay = (user) => {
    const [reviews, setReviews] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const {categoryURL, review_idURL} = useParams()
    
    let category
    categoryURL ? category = categoryURL : category = 'all'
    let isCommentsListLimited
    review_idURL ? isCommentsListLimited = true : isCommentsListLimited = false

    useEffect(()=>{
        setIsLoading(true)
        getReviews({category}).then((reviewsFromServer) =>{
            const filteredReviews = reviewsFromServer.filter(review => Number(review.review_id) === Number(review_idURL))
            review_idURL ? 
                setReviews(filteredReviews)
                : 
                setReviews(reviewsFromServer) 
            setIsLoading(false)
        })
    }, [category, user, review_idURL, isCommentsListLimited])

    return (isLoading ? <div className="main-display-header-loading">Loading...</div> :
        <div className="main-display">
            <header>
                <MainDisplayHeader category={category}/>
            </header>
            <main>
                {reviews.map((review)=>{
                    return <ReviewCard key={review.review_id} review_id={review.review_id} isCommentsListLimited={isCommentsListLimited} />
                })}
            </main>
        </div>
    );
};

export default MainDisplay;
