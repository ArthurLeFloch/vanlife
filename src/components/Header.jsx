import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
	return (
		<nav className="header-nav">
			<Link to="/" className="nav--title">#VANLIFE</Link> {/* This renders an anchor (html element: a) */}
			<NavLink to="/host" className="nav--item">Host</NavLink>
			<NavLink to="/about" className="nav--item">About</NavLink>
			<NavLink to="/vans" className="nav--item">Vans</NavLink>
			<NavLink to="/login" className="nav--item">
				<i className="fas fa-user-circle fa-2x"></i>
			</NavLink>
		</nav>
	);
}