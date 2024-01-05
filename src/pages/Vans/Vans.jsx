import React from "react";
import { Link } from "react-router-dom";

export default function Vans() {
	const [vans, setVans] = React.useState([]);

	React.useEffect(() => {
		fetch("http://localhost:3001/vans")
			.then((res) => res.json())
			.then((data) => setVans(data));
	}, []);

	const vanElements = vans.map((van) => {
		return (
			<Link to={"/vans/" + van.id} key={van.id} className="vans--item">
				<img src={van.imageUrl} alt={van.name} className="vans--image" />
				<h3>{van.name}</h3>
				<p>${van.price}/day</p>
				<p className={"vans--type " + van.type}>{van.type}</p>
			</Link>
		);
	});

	return (
		<div className="vans">
			<div className="vans--title">
				<h1>Explore our van options</h1>
				<div className="vans--filters">
					<button className="vans--filter simple">Simple</button>
					<button className="vans--filter luxury">Luxury</button>
					<button className="vans--filter rugged">Rugged</button>
					<button className="vans--filter-clean">Remove filter</button>
				</div>
			</div>
			<div className="vans--list">
				{vanElements}
			</div>
		</div>
	);
}