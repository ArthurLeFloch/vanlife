import React from "react";
import { Link } from "react-router-dom";

import image from "../assets/about-hero.png";

export default function About() {
	return (
		<div className="about">
			<img src={image} className="about--image" alt="Vanlife" />
			<h1 className="title">Don't squeeze in a sedan when you could relax in a van.</h1>
			<div className="about--text">
				<p>
					Our mission is to enliven your road trip with the perfect travel van rental.
					Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
					(Hitch costs extra 😉)
				</p>
				<p>
				Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
				</p>
			</div>
			<div className="alert">
				<p>Your destination is waiting.<br/> Your van is ready.</p>
				<Link to="/vans" className="about--button">
					Explore our vans
				</Link>
			</div>
		</div>
	);
}