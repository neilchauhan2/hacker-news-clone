import React, { useContext } from "react";
import UserContext from "../../context/UserContext";

const Profile = (props) => {
    const { user } = useContext(UserContext);

    return (
        <div>
            <h1>Profile</h1>
        </div>
    );
};

export default Profile;
