import React from 'react';
import { getComments } from '../utils/api';
import { useEffect, useState } from 'react';
import { formatDate } from '../utils/utils';

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
                <p>
                    <button>Add comment</button>
                </p>
            </div>
            <div className="comments">
                <ul>
                    {comments.map((comment) => {
                        const formatedDate = formatDate(comment.created_at, ['date', 'hour'])
                        return <li key={comment.comment_id}>
                            <div className="comment-box">
                                <div>
                                    <span id="comment-author">{comment.author}</span>
                                    <span id="comment-date">{formatedDate}</span>
                                </div>
                                <p>{comment.body}</p>
                                <div id="comment-votes">
                                    Votes: {comment.votes}
                                    <span id="button-plus">
                                        <button>+</button>
                                    </span>
                                    <span id="button-minus">
                                        <button>-</button>
                                    </span>
                                </div>
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        </>
    );
};

export default ReviewComments;