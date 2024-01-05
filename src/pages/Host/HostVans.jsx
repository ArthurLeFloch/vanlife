import React from "react";
import { Link } from "react-router-dom";

export default function HostVans() {
	const [vans, setVans] = React.useState([]);

	React.useEffect(() => {
		fetch("http://localhost:3001/host/vans")
			.then((response) => response.json())
			.then((data) => setVans(data));
	}, []);

	const vanElements = vans.map((van) => {
		return (
			<Link to={van.id} className="host-vans--item" key={van.id}>
				<img src={van.imageUrl} alt={van.name} className="host-vans--image" />
				<div className="host-vans--text">
					<h3>{van.name}</h3>
					<p>${van.price}/day</p>
				</div>
			</Link>
		);
	});

	return (
		<>
			<h1 className="title">Your listed vans</h1>
			<div className="host-vans--list">
				{vanElements}
			</div>
		</>
	);
}