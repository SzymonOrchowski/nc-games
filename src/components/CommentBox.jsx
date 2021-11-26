import React from 'react';
import { formatDate } from '../utils/utils';
import { useState } from 'react';

const CommentBox = ({comment}) => {
    const [confirmDelete, setConfirmDelete] = useState(false)

    const formatedDate = formatDate(comment.created_at, ['date', 'hour'])

    return (
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
    );
};

export default CommentBox;