// Filename - Home.jsx
import React from "react";
// Importing Link from react-router-dom to 
// navigate to different end points.
import { Link } from "react-router-dom";
import keyhole from "../images/keyhole.png"

export default function Home() {
    return (
        <div className="home">
            <h1 className="home--question">
                Insert question here
            </h1>
            <Link to="/Main">
                <button className="button--keyhole">
                    <img src={keyhole} className="home--keyhole"/>
                </button>
            </Link>
        </div>
    )
}

// const Home = () => {
// 	return (
// 		<div>
// 			<h1>Home Page</h1>
// 			<br />
// 			<ul>
// 				<li>
// 					{/* Endpoint to route to Home component */}
// 					<Link to="/">Home</Link>
// 				</li>
// 				<li>
// 					{/* Endpoint to route to About component */}
// 					<Link to="/about">About</Link>
// 				</li>
// 				<li>
// 					{/* Endpoint to route to Contact Us component */}
// 					<Link to="/contactus">Contact Us</Link>
// 				</li>
// 			</ul>
// 		</div>
// 	);
// };

