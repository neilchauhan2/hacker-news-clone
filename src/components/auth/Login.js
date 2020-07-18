import React from "react";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import firebase from "../../firebase";
import alert from "../helpers/alert";
import validateLogin from "../../validators/validateLogin";

const Login = (props) => {
    const INITIAL_STATE = {
        name: "",
        email: "",
        password: ""
    };

    const authenticateUser = async () => {
        const { email, password } = values;
        try {
            await firebase.login(email, password);
            alert("You have logged in successfully!", "success");
            props.history.push("/");
        } catch (error) {
            console.error("Authentication error.", error);
            alert(error.message, "danger");
        }
    };

    const { handleSubmit, handleChange, values } = useForm(
        INITIAL_STATE,
        validateLogin,
        authenticateUser
    );

    return (
        <div className="container mt-6">
            <h1 className="is-size-2 has-text-centered title">Log In</h1>
            <div className="field">
                <label className="label">Email</label>
                <div className="control">
                    <input
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        className="input"
                        type="email"
                        placeholder="abc@example.com"
                    />
                </div>
            </div>
            <div className="field mb-5">
                <label className="label">Password</label>
                <div className="control">
                    <input
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        className="input"
                        type="password"
                        placeholder="Password"
                    />
                </div>
            </div>
            <button
                className="btn-primary link-btn mr-5"
                onClick={handleSubmit}
            >
                Login
            </button>
            <Link className="btn-white-link link-btn" to="/forgot">
                Forgot Password
            </Link>
        </div>
    );
};

export default Login;
