import React from 'react';
import MainDisplayHeader from './MainDisplayHeader';
import ReviewCard from './ReviewCard';
import { useState, useEffect } from 'react';
import { getReviews } from '../utils/api';

const MainDisplay = ({category}) => {
    const [reviews, setReviews] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        setIsLoading(true)
        getReviews({category}).then((reviewsFromServer) =>{
            setReviews(reviewsFromServer)
            setIsLoading(false)
        })
    }, [category])

    return (isLoading ? <div className="main-display-header-loading">Loading...</div> :
        <div className="main-display">
            <header>
                <MainDisplayHeader category={category}/>
            </header>
            <main>
                {reviews.map((review)=>{
                    return <ReviewCard key={review.review_id} reviewObj={review}/>
                })}
            </main>
        </div>
    );
};

export default MainDisplay;
