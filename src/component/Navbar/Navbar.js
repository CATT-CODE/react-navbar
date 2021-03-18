import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import "./Navbar.css";


function NavBar() {
    return (
        <nav>
            <form>
            <body>
            <header className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-body border-bottom shadow-sm">
                <p className="h5 my-0 me-md-auto fw-normal">
                <Link to="/">
                    <i className="fas fa-film"></i>
                </Link>
                </p>
                <nav className="my-2 my-md-0 me-md-3">
                    <NavLink exact activeClassName="active-class-style" className="p-2" to="/">Home</NavLink>
                    <NavLink activeStyle={{ color: "red" }} className="btn btn-outline-primary" to="/sign-up">SignUp</NavLink>
                    <NavLink activeStyle={{ color: "red" }} className="btn btn-outline-primary" to="/login">Login</NavLink>
                </nav>
            </header>
            </body>
            </form>
            </nav>
    )
}

export default NavBar