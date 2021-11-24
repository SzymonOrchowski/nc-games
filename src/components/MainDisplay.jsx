import React from 'react';
import MainDisplayHeader from './MainDisplayHeader';
import ReviewCard from './ReviewCard';
import { useState, useEffect } from 'react';
import { getReviews } from '../utils/api';

const MainDisplay = ({category}) => {
    const [reviews, setReviews] = useState([])

    useEffect(()=>{
        getReviews({category}).then((reviewsFromServer) =>{
            setReviews(reviewsFromServer)
        })
    }, [category])

    return (
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
