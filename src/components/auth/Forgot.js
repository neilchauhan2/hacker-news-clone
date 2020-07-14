import React from "react";
import useForm from "../../hooks/useForm";
import firebase from "../../firebase";
import alert from "../helpers/alert";
import validatePasswordReset from "../../validators/validatePasswordReset";

const Forgot = () => {
    const INITIAL_STATE = {
        email: ""
    };

    const handlePasswordReset = async () => {
        try {
            const { email } = values;
            await firebase.resetPassword(email);
            alert("Check your email for password reset.", "link");
        } catch (error) {
            console.error("Password reset error.", error);
            alert(error.message);
        }
    };

    const { handleSubmit, handleChange, values, isSubmitting } = useForm(
        INITIAL_STATE,
        validatePasswordReset,
        handlePasswordReset
    );

    return (
        <div className="container forgot">
            <h1 className="is-size-3 has-text-centered">Forgot Password</h1>
            <div class="field">
                <label class="label">Email</label>
                <div class="control">
                    <input
                        name="email"
                        onChange={handleChange}
                        value={values.email}
                        class="input"
                        type="email"
                        placeholder="abc@example.com"
                    />
                </div>
            </div>
            <button className="button is-link" onClick={handleSubmit}>
                Reset Password
            </button>
        </div>
    );
};

export default Forgot;
