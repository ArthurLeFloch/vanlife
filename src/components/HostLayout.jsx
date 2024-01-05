import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
	return (
		<>
		<nav className="host-nav">
			<NavLink to="." end className="host-nav--item">
				Dashboard
			</NavLink>
			<NavLink to="income" className="host-nav--item">
				Income
			</NavLink>
			<NavLink to="vans" className="host-nav--item">
				Vans
			</NavLink>
			<NavLink to="reviews" className="host-nav--item">
				Reviews
			</NavLink>
		</nav>
		<Outlet />
		</>
	);
}