import React from 'react';
import { getComments } from '../utils/api';
import { useEffect, useState } from 'react';
import { postComment } from '../utils/api';
import { sortArrayByKey } from '../utils/utils';
import CommentBox from './CommentBox';

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

    const addCommentButtonVisibilityHandler = (event) => {
        event.preventDefault()
        setNewCommentBoxVisible(true)
    }

    sortArrayByKey(comments, 'created_at')

    return (isLoading ? <div>Loading comments...</div> :
        <>
            <div className="add-comment">
                <p>
                    <button onClick={addCommentButtonVisibilityHandler}>Add comment</button>
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
                        return <li key={comment.comment_id}><CommentBox comment={comment}/>
            
                        </li>
                    })}
                </ul>
            </div>
        </>
    );
};

export default ReviewComments;