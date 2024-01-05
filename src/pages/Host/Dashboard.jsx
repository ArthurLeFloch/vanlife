import React from "react";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
	return (
		<>
			<p>Dashboard</p>
			<Outlet />
		</>
	);
}