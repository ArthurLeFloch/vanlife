import React from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Vans() {
	const [searchParams,] = useSearchParams();

	const [vans, setVans] = React.useState([]);

	React.useEffect(() => {
		fetch("http://localhost:3001/vans")
			.then((res) => res.json())
			.then((data) => setVans(data));
	}, []);

	function filterVans(type) {
		return vans.map((van) => {
			return (van.type === type || type === null) ? (
				<Link to={van.id} key={van.id} className="vans--item" state={{ search: `?${searchParams.toString()}` }}>
					<img src={van.imageUrl} alt={van.name} className="vans--image" />
					<h3>{van.name}</h3>
					<p>${van.price}/day</p>
					<p className={"vans--type " + van.type}>{van.type}</p>
				</Link>
			) : null;
		});
	}

	function selectedClass(type) {
		if (type === searchParams.get("type")) {
			return " van--filter-selected";
		}
		return "";
	}

	// Update or remove ONLY key in searchParams
	function updateSearchParams(key, value) {
		const sp = new URLSearchParams(searchParams);
		value === null ? sp.delete(key) : sp.set(key, value);
		return `?${sp.toString()}`;
	}

	return (
		<div className="vans">
			<div className="vans--title">
				<h1>Explore our van options</h1>
				<div className="vans--filters">
					<Link className={"vans--filter simple" + selectedClass("simple")}
						to={updateSearchParams("type", "simple")}
					>
						Simple
					</Link>
					<Link className={"vans--filter luxury" + selectedClass("luxury")}
						to={updateSearchParams("type", "luxury")}
					>
						Luxury
					</Link>
					<Link className={"vans--filter rugged" + selectedClass("rugged")}
						to={updateSearchParams("type", "rugged")}
					>
						Rugged
					</Link>
					{
						searchParams.get("type") ?
							<Link className="vans--filter-clean"
								to={updateSearchParams("type", null)}
							>
								Remove filter
							</Link> : null
					}
				</div>
			</div>
			<div className="vans--list">
				{filterVans(searchParams.get("type"))}
			</div>
		</div>
	);
}