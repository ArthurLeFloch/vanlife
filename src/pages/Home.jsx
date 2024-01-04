import React from "react";

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
			<a className="home--button"> {/* Might need to change this to Link or similar */}
				Find your van
			</a>
		</div>
	);
}