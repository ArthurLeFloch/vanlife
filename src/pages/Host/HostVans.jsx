import React, { Suspense } from "react";
import { Await, Link, defer, useLoaderData } from "react-router-dom";

import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";

export async function loader({ request }) {
	await requireAuth(request);
	return defer({ vans: getHostVans() });
}

export default function HostVans() {
	const loaderData = useLoaderData();

	function vanElements(vans) {
		return vans.map((van) => {
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
	}

	return (
		<>
			<h1 className="title">Your listed vans</h1>
			<div className="host-vans--list">
				<Suspense fallback={<div>Loading vans...</div>}>
					<Await resolve={loaderData.vans}>
						{vans => (
							<>
								{vanElements(vans)}
							</>
						)}
					</Await>
				</Suspense>
			</div>
		</>
	);
}