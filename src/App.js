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
import useAuth from "./hooks/useAuth";
import UserContext from "./context/UserContext";
import Navbar from "./components/layout/Navbar";
import Link from "./components/pages/Link";
import "./App.css";
import "../node_modules/bulma/css/bulma.css";
import Tabs from "./components/layout/Tabs";

const App = () => {
    const [user, setUser] = useAuth();

    return (
        <Router>
            <UserContext.Provider value={{ user, setUser }}>
                <div className="App">
                    <Navbar />
                    <Tabs />
                    <div id="alertBox"></div>
                    <Switch>
                        <Route exact path="/" component={News} />{" "}
                        <Route exact path="/trending" component={Trending} />
                        <Route
                            exact
                            path="/submit"
                            component={() => <Submit user={user} />}
                        />
                        <Route exact path="/search" component={Search} />
                        <Route exact path="/profile" component={Profile} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={SignUp} />
                        <Route exact path="/forgot" component={Forgot} />
                        <Route
                            exact
                            path="/story/:linkId"
                            component={() => <Link user={user} />}
                        />
                        <Route
                            exact
                            path="/profile/edit"
                            component={() => (
                                <EditProfile user={user} setUser={setUser} />
                            )}
                        />
                    </Switch>
                </div>
            </UserContext.Provider>
        </Router>
    );
};

export default App;
