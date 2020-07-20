import React, { useState, useEffect } from "react";
import firebase from "../../firebase";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useParams, useHistory } from "react-router-dom";
import alert from "../helpers/alert";

const Link = (props) => {
    const { user } = props;
    const [link, setLink] = useState(null);
    const { linkId } = useParams();
    const linkRef = firebase.db.collection("links").doc(linkId);
    const history = useHistory();

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
            </div>
        )
    );
};

export default Link;
