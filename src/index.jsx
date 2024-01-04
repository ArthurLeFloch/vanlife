import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./style.css";

import Home from "./pages/Home";
import Vans from "./pages/Vans";
import About from "./pages/About";

function App() {
	return (
		<Router>
			<div className="wrapper">
				<nav>
					<Link to="/" className="nav--title">#VANLIFE</Link> {/* This renders an anchor (html element: a) */}
					<Link to="/about" className="nav--item">About</Link>
					<Link to="/vans" className="nav--item">Vans</Link>
				</nav>
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} /> {/* localhost:3000/about */}
						<Route path="/vans" element={<Vans />} /> {/* localhost:3000/ */}
					</Routes>
				</main>
				<footer>
					<p>© 2024 #VANLIFE</p>
				</footer>
			</div>
		</Router>
	);
}


createRoot(document.getElementById("root")).render(
	<App />
);
