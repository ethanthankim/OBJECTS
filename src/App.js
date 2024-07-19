// Filename - App.js

import React from "react"
import "./App.css";
// importing components from react-router-dom package
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate
} from "react-router-dom";

// import components
import Preloader from "./components/Preloader";
import Home from "./components/Home";
import Main from "./components/Main";
import Details from "./components/Details";
import mainObjects from "./main-objects";
import About from "./components/About";

function App() {
	const [objects, setObjects] = React.useState(mainObjects)

	function selectObj(id) {
		setObjects(prevObjects => {
			return prevObjects.map(obj => obj.id === id ? {...obj, isSelected: true} : {...obj, isSelected: false})
		})
	}

	return (
		<>
			{/* This is the alias of BrowserRouter i.e. Router */}
			<Router>
				<Routes>
					{/* This route is for home component 
		with exact path "/", in component props 
		we passes the imported component*/}
					<Route
						exact
						path="/"
						element={<Preloader />}
					/>
					<Route
						path="/Home"
						element={<Home />}
					/>

					<Route
						path="/Main"
						element={<Main objects={objects} selectObj={selectObj}/>}
					/>
					<Route
						path="/Details"
						element={<Details objects={objects}/>}
					/>
					<Route
						path="/About"
						element={<About />}
					/>

					{/* If any route mismatches the upper 
		route endpoints then, redirect triggers 
		and redirects app to home component with to="/" */}
					{/* <Redirect to="/" /> */}
					<Route
						path="*"
						element={<Navigate to="/" />}
					/>
				</Routes>
			</Router>
		</>
	);
}

export default App;
