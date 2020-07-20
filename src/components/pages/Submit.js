import React from "react";
import useForm from "../../hooks/useForm";
import firebase from "../../firebase";
import validateCreateLink from "../../validators/validateCreateLink";
import alert from "../helpers/alert";
import { useHistory } from "react-router-dom";

const Submit = (props) => {
    const history = useHistory();
    const { user } = props;
    const INITIAL_STATE = {
        url: "",
        description: ""
    };

    const handleCreateLink = () => {
        if (!user) {
            history.push("/login");
            alert("Please login to Submit a Story.", "danger");
        } else {
            const { url, description } = values;
            const newLink = {
                url,
                description,
                postedBy: {
                    id: user.uid,
                    name: user.displayName
                },
                voteCount: 1,
                votes: [],
                comments: [],
                createdAt: Date.now()
            };
            firebase.db.collection("links").add(newLink);
            alert("Story submitted.", "success");
        }
    };

    const { handleChange, handleSubmit, values } = useForm(
        INITIAL_STATE,
        validateCreateLink,
        handleCreateLink
    );

    return (
        <div className="container mt-6">
            <h1 className="is-size-1 has-text-centered">Submit a new story</h1>
            <div className="field">
                <label className="label">Link</label>
                <div className="control">
                    <input
                        name="url"
                        value={values.url}
                        onChange={handleChange}
                        className="input"
                        type="url"
                        placeholder="https://example.com"
                    />
                </div>
            </div>
            <div className="field">
                <label className="label">Description</label>
                <div className="control">
                    <input
                        name="description"
                        value={values.description}
                        onChange={handleChange}
                        className="input"
                        type="text"
                        placeholder="Description"
                    />
                </div>
            </div>
            <button className="btn-primary link-btn" onClick={handleSubmit}>
                Submit
            </button>
        </div>
    );
};

export default Submit;
