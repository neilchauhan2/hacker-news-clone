import React from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const Comment = (props) => {
    const { comment } = props;
    return (
        <div className="container box">
            <h3 className="is-size-3">{comment.body}</h3>
            <h4 className="subtitle mt-3">
                <i className=" mr-2  fas fa-user"></i>
                {comment.commentedBy.name}
                <i className=" mr-2 ml-3  fas fa-clock"></i>
                {formatDistanceToNow(comment.createdAt)} ago.
            </h4>
        </div>
    );
};

export default Comment;
