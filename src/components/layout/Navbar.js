import React, { useContext } from "react";
import { Link } from "react-router-dom";
import alert from "../helpers/alert";
import firebase from "../../firebase";
import UserContext from "../../context/UserContext";

function Navbar(props) {
    const { user } = useContext(UserContext);
    const logoutUser = async () => {
        try {
            await firebase.logout();
            // props.history.push("/");
            alert("Logged out successfully.", "success");
        } catch (error) {
            console.error("Logout error.", error);
            alert(error.message, "danger");
        }
    };

    return (
        <nav
            className="navbar is-link"
            role="navigation"
            aria-label="main navigation"
        >
            <div className="navbar-brand">
                <Link className="navbar-item" to="/">
                    <h1 className="is-size-3">Newzapp</h1>
                </Link>

                <Link
                    to="#"
                    role="button"
                    className="navbar-burger burger"
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarBasicExample"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </Link>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-end">
                    <div className="navbar-item">
                        {!user ? (
                            <div className="buttons">
                                <Link
                                    to="/register"
                                    className="button is-primary"
                                >
                                    <strong>Sign up</strong>
                                </Link>
                                <Link className="button is-light" to="/login">
                                    Log in
                                </Link>
                            </div>
                        ) : (
                            <button
                                className="button is-light"
                                onClick={logoutUser}
                            >
                                Log Out
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;