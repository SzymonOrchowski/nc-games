import React, { useContext } from 'react';
import { getComments } from '../utils/api';
import { useEffect, useState } from 'react';
import { postComment } from '../utils/api';
import { sortArrayByKey } from '../utils/utils';
import CommentBox from './CommentBox';
import { UserContext } from '../contexts/UserContext';
import { Link } from 'react-router-dom'

const ReviewComments = ({review_id, limit}) => {
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [newCommentBoxVisible, setNewCommentBoxVisible] = useState(false)
    const [newCommentContent, setNewCommentContent] = useState('')
    const [newCommentSubmitState, setNewCommentSubmitState] = useState(false)
    const { user } = useContext(UserContext)

    useEffect(()=>{
        setIsLoading(true)
        getComments(review_id).then((commentsForThatReview)=>{
            setComments(commentsForThatReview)
            setIsLoading(false)
        })
    }, [review_id, newCommentSubmitState])

    const submitHandler = (event) => {
        event.preventDefault();
        setNewCommentBoxVisible(false)
        postComment(review_id, user, newCommentContent).then(()=>{
            newCommentSubmitState ? setNewCommentSubmitState(false) : setNewCommentSubmitState(true);
        })
    }

    const inputHandler = (event) => {
        event.preventDefault();
        setNewCommentContent(event.target.value);
    }

    const addCommentButtonVisibilityHandler = (event) => {
        event.preventDefault()
        newCommentBoxVisible ? setNewCommentBoxVisible(false) : setNewCommentBoxVisible(true);
    }

    sortArrayByKey(comments, 'created_at')

    return (isLoading ? <div>Loading comments...</div> :
        <>
            <div className="add-comment">
                {user ? 
                <p>
                    <button onClick={addCommentButtonVisibilityHandler}>Add comment</button>
                </p>
                :
                <p>
                    <Link to="/users"><button>Add comment</button></Link>
                </p>
                }
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
                    {comments.map((comment, index) => {
                        console.log(limit)
                        if (limit !== 1) {
                            if (index < 1) {
                                return <li key={comment.comment_id}><CommentBox comment={comment}/>
                                </li>
                            } else {
                                return null;
                            }
                        } else {
                            return <li key={comment.comment_id}><CommentBox comment={comment}/>
                                </li>
                        }
                    })}
                </ul>
                {limit !== 1 ? <div id="show-all-comments-button">
                            <Link to={`/review/${review_id}`}><button>Show All Comments ({comments.length})</button></Link>
                        </div>
                : null}
            </div>
        </>
    );
};

export default ReviewComments;