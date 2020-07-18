import React from "react";
import Stories from "../Stories/Stories";

const News = (props) => {
    return (
        <div className="container mt-6">
            <Stories location={props.location} />
        </div>
    );
};

export default News;
