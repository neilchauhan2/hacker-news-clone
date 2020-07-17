import React from "react";
import Stories from "../Stories/Stories";

const Trending = (props) => {
    return (
        <div className="container">
            <h1 className="is-size-1 has-text-centered">Trending</h1>
            <Stories location={props.location} />
        </div>
    );
};

export default Trending;
