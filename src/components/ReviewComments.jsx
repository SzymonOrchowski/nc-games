import React from 'react';
import { getComments } from '../utils/api';
import { useEffect, useState } from 'react';
let counter = 0;
const ReviewComments = ({review_id}) => {
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState(false)

    useEffect(()=>{
        getComments(review_id).then((commentsForThatReview)=>{
            setComments(commentsForThatReview)
        })
    }, [review_id])
    
    return (
        <>
            {/* <div className="add-comment">
                <button onClick={setNewComment(true)}>Add comment</button>
            </div> */}
            {/* <div>
            {newComment ? <p>NewComment</p> : null}
            </div> */}
            <div className="comment-list">
                <ul>
                    {comments.map((comment) => {
                        return <li key={comment.comment_id}>
                            <h1>Comment author: {comment.author}</h1>
                            <p>Comment body: {comment.body}</p>
                            <p>Comment created_at: {comment.created_at}</p>
                            <p>Votes: {comment.votes}</p>
                        </li>
                    })}
                </ul>
            </div>
        </>
    );
};

export default ReviewComments;