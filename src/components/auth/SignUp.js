import React from "react";

const SignUp = () => {
    return (
        <div className="container signup">
            <div class="field">
                <label class="label">Name</label>
                <div class="control">
                    <input class="input" type="text" placeholder="John Doe" />
                </div>
            </div>
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
            <button className="button is-link">Sign Up</button>
        </div>
    );
};

export default SignUp;
