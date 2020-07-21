import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import alert from "../helpers/alert";
import firebase from "../../firebase";
import UserContext from "../../context/UserContext";
import "../../css/layout/navbar.css";

const Navbar = (props) => {
    const { user } = useContext(UserContext);

    useEffect(() => {
        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(
            document.querySelectorAll(".navbar-burger"),
            0
        );

        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {
            // Add a click event on each of them
            $navbarBurgers.forEach((el) => {
                el.addEventListener("click", () => {
                    // Get the target from the "data-target" attribute
                    const target = el.dataset.target;
                    const $target = document.getElementById(target);

                    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                    el.classList.toggle("is-active");
                    $target.classList.toggle("is-active");
                });
            });
        }
        //   eslint-disable-next-line
    }, []);

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
        <nav className="navbar " role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" to="/">
                    <h1 className="is-size-3 mb-1">
                        New
                        <span>
                            <i className="fas fa-bolt"></i>
                        </span>
                        App
                    </h1>
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
                                    className="btn-primary-inverted mr-3 mb-2 link-btn"
                                >
                                    <strong>Sign up</strong>
                                </Link>
                                <Link
                                    className="btn-white mb-2 link-btn"
                                    to="/login"
                                >
                                    Log in
                                </Link>
                            </div>
                        ) : (
                            <button
                                className="btn-white link-btn"
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
};

export default Navbar;
