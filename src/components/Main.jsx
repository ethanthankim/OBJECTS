// Filename - Main.jsx
import React from "react";
import Navbar from "./Navbar"
import { Link } from "react-router-dom";

export default function Main(props) {

	function handleOver(id) {
		document.getElementById(id).style.scale = 1.2
	}
	function handleLeave(id) {
		document.getElementById(id).style.scale = 1
	}

	function makeElementsFloat(selector) {
		const elements = document.querySelectorAll(selector);
		elements.forEach(element => {
		  element.style.animation = 'float 3s infinite ease-in-out';
		});
	  }

    const objElements = props.objects.map(object => (
		<Link to="/Details" key={object.id} >
			<button 
				id={object.id}
				className="main--button" 
				onMouseOver={()=> handleOver(object.id)}
				onMouseLeave={()=> handleLeave(object.id)}
				onClick={()=> props.selectObj(object.id)}
			>
				<img 
					src={require(`../images/${object.url}`)} 
					alt={object.label} 
					className="main--image"
				/>
			</button>
		</Link>
    ));

	makeElementsFloat('.main--image');
	
    return (
        <div className="main">
			<Navbar />
            {objElements}
        </div>
    );
}
