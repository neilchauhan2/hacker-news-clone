import React from "react";
import useForm from "../../hooks/useForm";
import firebase from "../../firebase";
import alert from "../helpers/alert";
import validateSignup from "../../validators/validateSignup";

const SignUp = (props) => {
    const INITIAL_STATE = {
        name: "",
        email: "",
        password: ""
    };

    const authenticateUser = async () => {
        const { name, email, password } = values;
        try {
            await firebase.register(name, email, password);
            alert("You have signed up successfully!", "success");
            props.history.push("/");
        } catch (error) {
            console.error("Authentication error.", error);
            alert(error.message, "danger");
        }
    };

    const { handleSubmit, handleChange, values } = useForm(
        INITIAL_STATE,
        validateSignup,
        authenticateUser
    );

    return (
        <div className="container mt-6">
            <h1 className="is-size-2 has-text-centered title">Sign Up</h1>
            <div class="field">
                <label class="label">Name</label>
                <div class="control">
                    <input
                        class="input"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        type="text"
                        placeholder="John Doe"
                    />
                </div>
            </div>
            <div class="field">
                <label class="label">Email</label>
                <div class="control">
                    <input
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        class="input"
                        type="email"
                        placeholder="abc@example.com"
                    />
                </div>
            </div>
            <div class="field mb-5">
                <label class="label">Password</label>
                <div class="control">
                    <input
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        class="input"
                        type="password"
                        placeholder="Password"
                    />
                </div>
            </div>
            <button className="btn-primary link-btn" onClick={handleSubmit}>
                Sign Up
            </button>
        </div>
    );
};

export default SignUp;
