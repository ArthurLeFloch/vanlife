import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
	return (
		<div className="home">
			<h1 className="home--title">
				You got the travel plans, we got the travel vans.
			</h1>
			<p className="home--text">
				Add adventure to your life by joining the #vanlife movement.
			</p>
			<p className="home--text">
				Rent the perfect van to make your perfect road trip.
			</p>
			<Link to="vans" className="home--button">
				Find your van
			</Link>
		</div>
	);
}