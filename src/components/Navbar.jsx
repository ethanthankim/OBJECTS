import React from "react"
import { Link } from "react-router-dom";

export default function Navbar(props) {
    const textStyle = {
        color: props.darkmode ? "white" : "black",
    };
    return(
        <header 
            className="navbar"
            style={textStyle}
        >
            <Link to="/Home" className="link">
                <h1 className="navbar--title">natsukashii</h1>
            </Link>
            <ul className="navbar--items">
                <Link to="/About" className="link">
                    <li>About</li>
                </Link>
                <Link to="/Main" className="link">
                    <li>Stories</li>
                </Link>
                <li>Contact</li>
            </ul>
        </header>
    )
}