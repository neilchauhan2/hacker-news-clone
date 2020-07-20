import React, { useState, useEffect } from "react";
import firebase from "../../firebase";
import Story from "../Stories/Story";

const Search = () => {
    const [links, setLinks] = useState([]);
    const [filter, setFilter] = useState("");
    const [filteredLinks, setFilteredLinks] = useState([]);

    const getInitialLinks = () => {
        firebase.db
            .collection("links")
            .get()
            .then((snapshot) => {
                const links = snapshot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() };
                });
                setLinks(links);
            });
    };

    const handleChange = (e) => {
        setFilter(e.target.value);
    };

    const handleSearch = () => {
        const query = filter.toLowerCase();
        if (query.length >= 3) {
            const matchedLinks = links.filter((link) => {
                return (
                    link.description.toLowerCase().includes(query) ||
                    link.url.toLowerCase().includes(query) ||
                    link.postedBy.name.toLowerCase().includes(query)
                );
            });
            setFilteredLinks(matchedLinks);
        }
    };

    useEffect(() => {
        handleSearch();
        // eslint-disable-next-line
    }, [filter]);

    useEffect(() => {
        getInitialLinks();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="container">
            <div className="field is-grouped">
                <p className="control is-expanded">
                    <input
                        value={filter}
                        onChange={handleChange}
                        className="input"
                        type="text"
                        placeholder="Type at least 3 characters to search."
                    />
                </p>
            </div>
            <hr className="mt-4 mb-4" />
            <div className="container search-result">
                {filteredLinks &&
                    filteredLinks.map((link) => (
                        <Story
                            key={link.id}
                            url={`/story/${link.id}`}
                            link={link}
                        />
                    ))}
            </div>
        </div>
    );
};

export default Search;
