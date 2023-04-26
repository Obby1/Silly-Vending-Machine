import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";


function VendingMachine() {
    return (
        <div >
            <NavBar />
            <h1>Vending Machine</h1>
            <h2>Please order from our MADE IN USA menu: </h2>
            <div >
                <Link to="/man">Man</Link>
                <Link to="/woman">Woman</Link>
                <Link to="/eagle">Eagle</Link>
            </div>
            <img src="https://media.giphy.com/media/TrcQjNKDyPx7y/giphy.gif" alt="Vending Machine" />

        </div>
    );
}

export default VendingMachine;
