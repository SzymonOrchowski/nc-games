import React from 'react';
import { getComments } from '../utils/api';
import { useEffect, useState } from 'react';
import { formatDate } from '../utils/utils';
import { postComment } from '../utils/api';
import { sortArrayByKey } from '../utils/utils';

const ReviewComments = ({review_id}) => {
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [newCommentBoxVisible, setNewCommentBoxVisible] = useState(true)
    const [newCommentContent, setNewCommentContent] = useState('')
    const [newCommentSubmit, setNewCommentSubmit] = useState(false)
    const [confirmDelete, setConfirmDelete] = useState(false)
    
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
    console.log(comments, '<---presort')
    sortArrayByKey(comments, 'created_at')
    console.log(comments, '<---postsort')

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
                                <input type="text" id="new-comment-input-field" value={newCommentContent} onChange={inputHandler}>
                                </input>
                                <span>
                                    <input id="new-comment-submit-button" type="submit" value="Submit comment"></input>
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
                                    <span id="button-delete">
                                        <button onClick={(event) => {
                                            event.preventDefault()
                                            setConfirmDelete(true)
                                        }}>Delete comment</button>
                                    </span>
                                    {confirmDelete ? <>
                                    <span>Are you sure you want to delete this comment?</span>
                                    <span id="button-yes">
                                        <button onClick={(event) => {
                                            event.preventDefault()
                                            setConfirmDelete(false)
                                        }}>Yes</button>
                                    </span>
                                    <span id="button-no">
                                        <button onClick={(event) => {
                                            event.preventDefault()
                                            setConfirmDelete(false)
                                        }}>No</button>
                                    </span>
                                    </>
                                    : null}
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