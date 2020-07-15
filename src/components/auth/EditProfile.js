import React from "react";
import useForm from "../../hooks/useForm";
import firebase from "../../firebase";
import alert from "../helpers/alert";
import validateEditProfile from "../../validators/validateEditProfile";

const EditProfile = (props) => {
    const { user, setUser } = props;
    const INITIAL_STATE = {
        name: user && user.displayName,
        email: user && user.email,
        newPassword: "",
        currentPassword: ""
    };

    const updateProfile = async (name, email, password) => {
        try {
            await user.updateProfile({
                displayName: name
            });
            if (password) await user.updatePassword(password);
        } catch (error) {
            console.error("Profile update error", error);
            alert(error.message, "danger");
        }
    };

    const authenticateUser = async () => {
        try {
            const { name, email, currentPassword, newPassword } = values;
            await reauthenticate(user.email, currentPassword);
            await updateProfile(name, email, newPassword);
            const res = await firebase.login(
                email,
                newPassword || currentPassword
            );
            setValues({
                name: user && user.displayName,
                email: user && user.email,
                newPassword: "",
                currentPassword: ""
            });
            setUser(res.user);
            alert("Your Profile has been updated successfully.", "success");
        } catch (error) {
            console.error("Profile update error.", error);
            alert(error.message, "danger");
        }
    };

    const reauthenticate = async (email, password) => {
        try {
            const credential = firebase.app.auth.EmailAuthProvider.credential(
                email,
                password
            );
            await user.reauthenticateWithCredential(credential);
            console.log("Reauthencation Successful.");
        } catch (error) {
            console.error("Profile update error.", error);
            alert(error.message, "danger");
        }
    };

    const { handleChange, handleSubmit, values, setValues } = useForm(
        INITIAL_STATE,
        validateEditProfile,
        authenticateUser
    );

    return (
        <div className="container">
            <h1 className="is-size-1 has-text-centered">Edit profile</h1>
            <div className="field">
                <label className="label">Name</label>
                <div className="control">
                    <input
                        className="input"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        type="text"
                    />
                </div>
            </div>
            <div className="field">
                <label className="label">Email</label>
                <div className="control">
                    <input
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        className="input"
                        type="email"
                    />
                </div>
            </div>
            <div className="field">
                <label className="label">Current Password</label>
                <div className="control">
                    <input
                        name="currentPassword"
                        value={values.currentPassword}
                        onChange={handleChange}
                        className="input"
                        type="password"
                        placeholder="Password"
                    />
                </div>
            </div>
            <div className="field">
                <label className="label">New Password</label>
                <div className="control">
                    <input
                        name="newPassword"
                        value={values.newPassword}
                        onChange={handleChange}
                        className="input"
                        type="password"
                        placeholder="Password"
                    />
                </div>
            </div>
            <button
                className="button is-link is-fullwidth"
                onClick={handleSubmit}
            >
                Save Profile
            </button>
        </div>
    );
};

export default EditProfile;
