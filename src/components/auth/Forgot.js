import React from "react";

const Forgot = () => {
    return (
        <div className="container forgot">
            <h1 className="is-size-3 has-text-centered">Forgot Password</h1>
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
            <button className="button is-link">Reset Password</button>
        </div>
    );
};

export default Forgot;
