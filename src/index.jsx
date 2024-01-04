import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./style.css";

function Home() {
	return (
		<h1>App</h1>
	);
}

function About() {
	return (
		<h1>About</h1>
	);
}

createRoot(document.getElementById("root")).render(
	<Router>
		<nav>
			<Link to="/">Home</Link> {/* This renders an anchor (html element: a) */}
			<Link to="/about">About</Link>
		</nav>
		<Routes>
			<Route path="/" element={<Home />} /> {/* localhost:3000/ */}
			<Route path="/about" element={<About />} /> {/* localhost:3000/about */}
		</Routes>
	</Router>
);
