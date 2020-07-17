import React, { useState, useEffect } from "react";
import firebase from "../../firebase";
import Story from "./Story";

const Stories = (props) => {
    const [links, setLinks] = useState([]);
    const isTrending = props.location.pathname.includes("trending");

    const handleSnapshot = (snapshot) => {
        const links = snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
        });
        setLinks(links);
    };

    const getLinks = () => {
        if (isTrending) {
            return firebase.db
                .collection("links")
                .orderBy("voteCount", "desc")
                .onSnapshot(handleSnapshot);
        }
        return firebase.db
            .collection("links")
            .orderBy("created", "desc")
            .onSnapshot(handleSnapshot);
    };

    useEffect(() => {
        const unsubscribe = getLinks();
        return () => unsubscribe();
        //eslint-disable-next-line
    }, [isTrending]);

    return (
        <div className="container">
            {links &&
                links.map((link) => {
                    <Story key={link.id} />;
                })}
        </div>
    );
};

export default Stories;
