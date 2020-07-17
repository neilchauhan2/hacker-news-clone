import React from "react";
import Stories from "../Stories/Stories";

const News = (props) => {
    return (
        <div className="container">
            <h1 className="is-size-1 has-text-centered">News</h1>
            <Stories />
        </div>
    );
};

export default News;
