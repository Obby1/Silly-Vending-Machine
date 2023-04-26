import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
        <nav className="NavBar">
            <NavLink exact to="/" >
                Home
            </NavLink>
            <NavLink to="/man" >
                Man
            </NavLink>
            <NavLink to="/woman" >
                Woman
            </NavLink>
            <NavLink to="/eagle" >
                Eagle
            </NavLink>
        </nav>
    );
}

export default NavBar;