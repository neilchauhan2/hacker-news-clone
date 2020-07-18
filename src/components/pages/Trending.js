import React from "react";
import Stories from "../Stories/Stories";

const Trending = (props) => {
    return (
        <div className="container mt-6">
            <Stories location={props.location} />
        </div>
    );
};

export default Trending;
