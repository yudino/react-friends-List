import React from 'react';
import { Navbar } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Homepage from "../../pages/homepage/homepage.component";
import FriendsView from "../../pages/friends-view/friends-view.component";

const Header = () => {
    return (
        <Router>
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <div className="mr-auto navbar-nav">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/friends-view" className="nav-link">Your friends</Link>
                </div>
            </Navbar>
            <Switch>
                <Route path="/friends-view">
                    <FriendsView/>
                </Route>
                <Route path="/">
                    <Homepage/>
                </Route>
            </Switch>
        </>
        </Router>
    );
}

export default Header;
