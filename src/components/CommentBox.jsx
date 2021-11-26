import React from 'react';
import { formatDate } from '../utils/utils';
import { useState } from 'react';
import { deleteComment } from '../utils/api';

const CommentBox = ({comment}) => {
    const [isConfirmDeleteVisible, setIsConfirmDeleteVisible] = useState(false)
    const [isCommentVisible, setIsCommentVisible] = useState(true)

    const formatedDate = formatDate(comment.created_at, ['date', 'hour'])

    return (isCommentVisible ?
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
                        setIsConfirmDeleteVisible(true)
                    }}>Delete comment</button>
                </span>
                {isConfirmDeleteVisible ? <>
                <span>Are you sure you want to delete this comment?</span>
                <span id="button-yes">
                    <button onClick={(event) => {
                        event.preventDefault()
                        setIsConfirmDeleteVisible(false)
                        deleteComment(comment.comment_id)
                        setIsCommentVisible(false)
                    }}>Yes</button>
                </span>
                <span id="button-no">
                    <button onClick={(event) => {
                        event.preventDefault()
                        setIsConfirmDeleteVisible(false)
                    }}>No</button>
                </span>
                </>
                : null}
            </div>
        </div>
        : null
    );
};

export default CommentBox;