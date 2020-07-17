import React, { useState, useEffect } from "react";
import firebase from "../../firebase";
import { useParams } from "react-router-dom";

const Link = (props) => {
    const { user } = props;
    const [link, setLink] = useState(null);
    const { linkId } = useParams();
    const linkRef = firebase.db.collection("links").doc(linkId);

    const postedByAuthUser = (link) => {
        return user && user.uid === link.postedBy.id;
    };

    const handleDelete = () => {
        linkRef
            .delete()
            .then(() => console.log("Document deleted."))
            .catch((error) => {
                console.error("Error deleting document.", error);
            });
        props.history.push("/");
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
            <div className="container mt-4">
                <h1 className="is-size-2 title">{link.description}</h1>
                {postedByAuthUser(link) && (
                    <button
                        className="button is-danger mr-4"
                        onClick={handleDelete}
                    >
                        Delete Story
                    </button>
                )}

                <a href={link.url} className="button is-link">
                    View
                </a>
            </div>
        )
    );
};

export default Link;
