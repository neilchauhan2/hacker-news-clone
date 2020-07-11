import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import News from "./components/pages/News";
import Trending from "./components/pages/Trending";
import Submit from "./components/pages/Submit";
import Search from "./components/pages/Search";
import Profile from "./components/pages/Profile";
import "./App.css";

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
                    <h1>hello World</h1>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
