import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="container login">
            <div class="field">
                <label class="label">Email</label>
                <div class="control">
                    <input
                        class="input"
                        type="email"
                        placeholder="abc@example.com"
                    />
                </div>
            </div>
            <div class="field">
                <label class="label">Password</label>
                <div class="control">
                    <input
                        class="input"
                        type="password"
                        placeholder="Password"
                    />
                </div>
            </div>
            <button className="button is-link">Login</button>
            <Link className="button" to="/forgot">
                Forgot Password
            </Link>
        </div>
    );
};

export default Login;
