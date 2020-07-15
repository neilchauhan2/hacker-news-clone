import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
import { Link } from "react-router-dom";

const Profile = (props) => {
    const { user } = useContext(UserContext);
    return (
        <div className="container">
            {user ? (
                <div className="container profile">
                    <h1 className="is-size-1 hastext-centered">Profile</h1>
                    <h2 className="is-size-3">Name: {user.displayName}</h2>
                    <h2 className="is-size-3">Email: {user.email}</h2>
                    <Link
                        to="/profile/edit"
                        className="button is-fullwidth is-primary"
                    >
                        Edit Profile
                    </Link>
                </div>
            ) : (
                <img
                    src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
                    alt="loading"
                />
            )}
        </div>
    );
};

export default Profile;
