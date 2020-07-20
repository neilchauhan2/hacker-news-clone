import React, { useState, useEffect } from "react";
import firebase from "../../firebase";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useParams, useHistory } from "react-router-dom";
import alert from "../helpers/alert";
import Comment from "../Stories/Comment";

const Link = (props) => {
    const { user } = props;
    const [link, setLink] = useState(null);
    const { linkId } = useParams();
    const linkRef = firebase.db.collection("links").doc(linkId);
    const history = useHistory();
    const [commentText, setCommentText] = useState("");

    const handleCommentChange = (e) => {
        setCommentText(e.target.value);
    };

    const postedByAuthUser = (link) => {
        return user && user.uid === link.postedBy.id;
    };

    const handleAddVote = () => {
        if (!user) {
            history.push("/login");
            alert("Please login to Upvote.", "danger");
        } else {
            linkRef.get().then((doc) => {
                const curVotes = doc.data().votes;
                const vote = {
                    votedBy: { id: user.uid, name: user.displayName }
                };
                const newVoteCount = doc.data().voteCount + 1;
                linkRef.update({
                    votes: [...curVotes, vote],
                    voteCount: newVoteCount
                });
                setLink({
                    ...link,
                    votes: [...curVotes, vote],
                    voteCount: newVoteCount
                });
            });
        }
    };

    const handleAddComment = () => {
        if (!user) {
            history.push("/login");
            alert("Please login to Comment.", "danger");
        } else {
            linkRef.get().then((doc) => {
                const curComments = doc.data().comments;
                const comment = {
                    commentedBy: { id: user.uid, name: user.displayName },
                    createdAt: Date.now(),
                    body: commentText
                };
                linkRef.update({
                    comments: [...curComments, comment]
                });
                setLink({
                    ...link,
                    comments: [...curComments, comment]
                });
            });
        }
    };

    const handleDelete = () => {
        linkRef
            .delete()
            .then(() => console.log("Document deleted."))
            .catch((error) => {
                console.error("Error deleting document.", error);
            });
        history.push("/");
    };

    const getLink = () => {
        linkRef.get().then((doc) => {
            setLink({ ...doc.data(), id: doc.id });
        });
    };

    useEffect(() => {
        getLink();
        // eslint-disable-next-line
    }, [linkId]);

    return (
        link && (
            <div className="container mt-6">
                <h1 className="is-size-2 title">{link.description}</h1>
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
                {postedByAuthUser(link) && (
                    <button className="btn-delete" onClick={handleDelete}>
                        Delete Story
                    </button>
                )}
                <button
                    className="btn-primary-inverted btn-upvote"
                    onClick={handleAddVote}
                >
                    Upvote
                </button>
                <a href={link.url} className="btn-primary-link btn-view">
                    View
                </a>
                <hr className="mt-6" />
                <div className="container mt-5">
                    <h3 className="is-size-4 title mb-3">Comments</h3>
                    <article className="media">
                        <div className="media-content">
                            <div className="field">
                                <p className="control">
                                    <textarea
                                        className="textarea"
                                        value={commentText}
                                        onChange={handleCommentChange}
                                        placeholder="Add a comment..."
                                    ></textarea>
                                </p>
                            </div>
                            <nav className="level">
                                <div className="level-left">
                                    <div className="level-item">
                                        <button
                                            onClick={handleAddComment}
                                            className="btn-primary link-btn"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </article>
                    <div className="comments-section mt-6">
                        {link.comments &&
                            link.comments.map((comment) => (
                                <Comment comment={comment} />
                            ))}
                    </div>
                </div>
            </div>
        )
    );
};

export default Link;
