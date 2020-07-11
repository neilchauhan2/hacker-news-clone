import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import News from "./components/pages/News";
import Trending from "./components/pages/Trending";
import Submit from "./components/pages/Submit";
import Search from "./components/pages/Search";
import Profile from "./components/pages/Profile";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import EditProfile from "./components/auth/EditProfile";
import Forgot from "./components/auth/Forgot";
import "./App.css";
import "../node_modules/bulma/css/bulma.css";

function App() {
    return (
        <Router>
            <div className="App">
                {/* Navbar--> */}
                <Switch>
                    <Route path="/news" component={News} />
                    <Route path="/trending" component={Trending} />
                    <Route path="/submit" component={Submit} />
                    <Route path="/search" component={Search} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={SignUp} />
                    <Route path="/forgot" component={Forgot} />
                    <Route path="/profile/edit" component={EditProfile} />
                    <h1>hello World</h1>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
