import React from "react";
import { Link, useLocation, useLoaderData } from "react-router-dom";

import { getVans } from "../../api";

export function loader({ params }) {
	return getVans(params.id);
}

export default function VanDetail() {
	const location = useLocation();

	const vanData = useLoaderData();

	const search = location.state?.search || "";

	let backText = "Back to all vans";
	if (search !== "") {
		const sp = new URLSearchParams(search);
		const type = sp.get("type");
		if (type) {
			backText = `Back to ${type} vans`;
		}
	}

	return (
		<div className="van-details">
			<Link to={`..${search}`}
				relative="path"
				className="back"
			>
				<i className="back-arrow fas fa-arrow-left"></i>
				{backText}
			</Link>
			<img src={vanData.imageUrl} alt={vanData.name} className="van-details--image" />
			<p className={"vans--type " + vanData.type}>{vanData.type}</p>
			<h1 className="van-details--title">{vanData.name}</h1>
			<p className="van-details--price-text">
				<span className="van-details--price">${vanData.price}</span>
				/day
			</p>
			<p>{vanData.description}</p>
			<button className="van-details--rent">Rent this van</button>
		</div>
	);
}