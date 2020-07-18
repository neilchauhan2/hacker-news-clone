import React from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { Link } from "react-router-dom";

const Story = (props) => {
    const { link, url } = props;
    return (
        <div className="box">
            <h2 className="title">{link.description}</h2>
            <div className="subtitle mt-2">
                {" "}
                Upvotes: {link.voteCount} | Author: {link.postedBy.name} |
                Comments: {link.comments.length} | Posted
                {" " + formatDistanceToNow(link.createdAt)} ago.
            </div>

            <Link className="btn-primary-link" to={url}>
                View Story
            </Link>
        </div>
    );
};

export default Story;
