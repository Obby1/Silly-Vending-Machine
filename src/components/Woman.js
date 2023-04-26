import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";


function Woman() {
    return (
        <div >
            <NavBar />
            <h1>Woman</h1>
            <div>
                <Link to="/">Go back</Link>
            </div>
            <img src="https://media.giphy.com/media/14no50AZuJ58rK/giphy.gif" alt="Woman" />

        </div>
    );
}

export default Woman;
