// Filename - Main.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Main(props) {

    const objElements = props.objects.map(object => (
		<Link to="/Details" key={object.id} >
			<button className="main--button" onClick={()=> props.selectObj(object.id)}>
				<img 
					src={require(`../images/${object.url}`)} 
					alt={object.label} 
					className="main--image"
				/>
			</button>
		</Link>
    ));

    return (
        <div className="main">
            {objElements}
        </div>
    );
}
