import React, { Suspense } from "react";
import { Await, Link, defer, useLoaderData } from "react-router-dom";

import { getHostVans } from "../../api";

export function loader() {
	return defer({ vans: getHostVans() });
}

export default function Dashboard() {
	const loaderData = useLoaderData();

	function vanElements(vans) {
		return vans.map((van) => {
			return (
				<div to={van.id} className="host-vans--item" key={van.id}>
					<img src={van.imageUrl} alt={van.name} className="host-vans--image" />
					<div className="host-vans--text">
						<h3>{van.name}</h3>
						<p>${van.price}/day</p>
					</div>
					<Link to={`vans/${van.id}`} className="dashboard--link">
						View
					</Link>
				</div>
			);
		});
	}

	return (
		<>
			<div className="dashboard--welcome">
				<div className="dashboard--welcome-text">
					<h1>Welcome!</h1>
					<p>Income last <span className="dashboard--duration">30 days</span></p>
					<p className="dashboard--income">$2,260</p>
				</div>
				<Link className="dashboard--link" to="income">
					Details
				</Link>
			</div>
			<div className="dashboard--reviews">
				<p className="dashboard--reviews-score">
					<span className="dashboard--reviews-title">Review score</span>
					<i className="dashboard--star fas fa-star"></i>
					<b>5.0</b> / 5
				</p>
				<Link to="reviews" className="dashboard--link">Details</Link>
			</div>

			<div className="dashboard--vans">
				<h2>Your listed vans</h2>
				<Suspense fallback={<p>Loading...</p>}>
					<Await resolve={loaderData.vans}>
						{
							(vans) => (
								<>
									{vanElements(vans)}
								</>
							)
						}
					</Await>
				</Suspense>

			</div>
		</>
	);
}