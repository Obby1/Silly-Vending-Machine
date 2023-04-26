import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";



function Man() {
    return (
        <div >
            <NavBar />
            <h1>Man</h1>
            <div>
                <Link to="/">Go back</Link>
            </div>

            <img src="https://media.giphy.com/media/RWjE2OR19y2GI/giphy.gif" alt="Man" />
        </div>
    );
}

export default Man;
