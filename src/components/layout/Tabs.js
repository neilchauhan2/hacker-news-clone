import React from "react";
import { Link, useLocation } from "react-router-dom";

const Tabs = () => {
    const location = useLocation();
    return (
        <div className="tabs is-centered is-large">
            <ul>
                <li className={location.pathname === "/" ? "is-active" : " "}>
                    <Link to="/">
                        <span className="icon is-small">
                            <i class="far fa-newspaper"></i>
                        </span>
                        <span>News</span>
                    </Link>
                </li>
                <li
                    className={
                        location.pathname === "/trending" ? "is-active" : " "
                    }
                >
                    <Link to="/trending">
                        <span className="icon is-small">
                            <i class="fas fa-chart-line"></i>
                        </span>
                        <span>Trending</span>
                    </Link>
                </li>
                <li
                    className={
                        location.pathname === "/submit" ? "is-active" : " "
                    }
                >
                    <Link to="submit">
                        <span className="icon is-small">
                            <i class="fas fa-plus-circle"></i>
                        </span>
                        <span>Submit</span>
                    </Link>
                </li>
                <li
                    className={
                        location.pathname === "/search" ? "is-active" : " "
                    }
                >
                    <Link to="/search">
                        <span className="icon is-small">
                            <i class="fas fa-search"></i>
                        </span>
                        <span>Search</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Tabs;
