import React from 'react';
import { getComments } from '../utils/api';
import { useEffect, useState } from 'react';

const ReviewComments = ({review_id}) => {
    const [comments, setComments] = useState([])

    useEffect(()=>{
        getComments(review_id).then((commentsForThatReview)=>{
            setComments(commentsForThatReview)
        })
    }, [review_id])
    
    return (
        <>
            <div className="add-comment">
                <button>Add comment</button>
            </div>
            <div className="comments">
                {/* <ul>
                    {comments.map((comment) => {
                        return <li key={comment.comment_id}>
                            <p>Comment author: {comment.author}</p>
                            <p>Comment body: {comment.body}</p>
                            <p>Comment created_at: {comment.created_at}</p>
                            <p>Votes: {comment.votes}</p>
                            <button>+</button>
                            <button>-</button>
                        </li>
                    })}
                </ul> */}
            </div>
        </>
    );
};

export default ReviewComments;