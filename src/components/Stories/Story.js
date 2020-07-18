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
                <i className=" mr-1  ml-1 far fa-thumbs-up"></i>{" "}
                {link.voteCount} <i className=" mr-1 ml-2 fas fa-user"></i>{" "}
                {link.postedBy.name}{" "}
                <i className=" mr-1  ml-2 far fa-comment"></i>{" "}
                {link.comments.length}{" "}
                <i className=" mr-1 ml-2  fas fa-clock"></i>
                {" " + formatDistanceToNow(link.createdAt)} ago.
            </div>

            <Link className="btn-primary-link" to={url}>
                View Story
            </Link>
        </div>
    );
};

export default Story;
