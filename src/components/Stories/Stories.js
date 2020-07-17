import React, { useState, useEffect } from "react";
import firebase from "../../firebase";
import Story from "./Story";

const Stories = (props) => {
    const [links, setLinks] = useState([]);
    const isTrending = props.location.pathname.includes("trending");

    console.log(links);
    const handleSnapshot = (snapshot) => {
        console.log(snapshot);
        const newlinks = snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
        });
        setLinks(newlinks);
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
            .orderBy("createdAt", "desc")
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
                links.map((link) => (
                    <Story
                        key={link.id}
                        url={`/story/${link.id}`}
                        link={link}
                    />
                ))}
        </div>
    );
};

export default Stories;
