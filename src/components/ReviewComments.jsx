import React from 'react';
import { getComments } from '../utils/api';
import { useEffect, useState } from 'react';
import { formatDate } from '../utils/utils';
import { postComment } from '../utils/api';

const ReviewComments = ({review_id}) => {
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [newCommentBoxVisible, setNewCommentBoxVisible] = useState(false)
    const [newCommentContent, setNewCommentContent] = useState('')
    const [newCommentSubmit, setNewCommentSubmit] = useState(false)
    
    useEffect(()=>{
        setIsLoading(true)
        getComments(review_id).then((commentsForThatReview)=>{
            setComments(commentsForThatReview)
            setIsLoading(false)
            setNewCommentSubmit(false)
        })
    }, [review_id, newCommentSubmit])

    const submitHandler = (event) => {
        event.preventDefault();
        setNewCommentBoxVisible(false)
        postComment(review_id, 'user', newCommentContent).then(()=>{
            setNewCommentSubmit(true)
        })
    }

    const inputHandler = (event) => {
        event.preventDefault();
        setNewCommentContent(event.target.value);
    }

    return (isLoading ? <div>Loading comments...</div> :
        <>
            <div className="add-comment">
                <p>
                    <button onClick={(event)=>{
                        event.preventDefault()
                        setNewCommentBoxVisible(true)
                    }}>Add comment</button>
                </p>
            </div>
            <div className="comments">
                <ul>
                    {newCommentBoxVisible ? <li>
                        <div className="comment-box">
                            <form onSubmit={submitHandler}>
                                <input type="text" id="newCommentInput" value={newCommentContent} onChange={inputHandler}>
                                </input>
                                <span>
                                    <input type="submit" value="Submit comment"></input>
                                </span>
                            </form>
                        </div>
                    </li> : null}
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