import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import NavBar from "./NavBar";


function Eagle() {
    const [eagles, setEagles] = useState([]);

    function handleClick() {
        const x = window.innerWidth * Math.random();
        const y = window.innerHeight * Math.random();
        setEagles(prevEagles => [...prevEagles, { x, y }]);
    }

    const e = eagles.map((eagle, i) => (
        <img
            key={i}
            src="https://media.giphy.com/media/rTIXh5JftLoic/giphy.gif"
            className="eagle"
            // may need to offset random eagles from top -200 px to avoid button blocked
            style={{ position: 'absolute', top: `${eagle.y}px`, left: `${eagle.x}px` }}
            alt="eagles gif"
        />
    ));

    return (
        <div style={{ position: 'relative' }}>
            <NavBar />
            <h1>Eagles bought: {eagles.length}</h1>
            <button onClick={handleClick}>nom nom nom</button>
            <div>
                <Link to="/">Go back</Link>
            </div>
            {e}
        </div>
    );
}

export default Eagle;
