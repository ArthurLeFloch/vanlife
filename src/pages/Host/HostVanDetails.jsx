import React, { Suspense } from "react";
import { Await, Link, NavLink, Outlet, useLoaderData, defer } from "react-router-dom";

import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";

export async function loader({ params, request }) {
	await requireAuth(request);
	return defer({ vanData: getHostVans(params.id) });
}

export default function HostVanDetails() {
	const loaderData = useLoaderData();

	return (
		<div className="host-van-details">
			<Link to=".." relative="path" className="back">
				<i className="back-arrow fas fa-arrow-left"></i>
				Back to all vans
			</Link>
			<div className="host-van-details--content">
				<Suspense fallback={<div>Loading van...</div>}>
					<Await resolve={loaderData.vanData}>
						{vanData => (
							<>
								<div className="host-van-details--header">
									<img src={vanData.imageUrl} alt={vanData.name} className="host-van-details--image" />
									<div className="host-van-details--text">
										<p className={"vans--type " + vanData.type}>{vanData.type}</p>
										<h2>{vanData.name}</h2>
										<b className="host-van-details--price">${vanData.price}/day</b>
									</div>
								</div>
								<nav className="host-van-details--nav">
									<NavLink end to={"/host/vans/" + vanData.id} className="host-van-details--nav-item">
										Details
									</NavLink>
									<NavLink to={"/host/vans/" + vanData.id + "/pricing"} className="host-van-details--nav-item">
										Pricing
									</NavLink>
									<NavLink to={"/host/vans/" + vanData.id + "/photos"} className="host-van-details--nav-item">
										Photos
									</NavLink>
								</nav>
								<div className="host-van-details--inner">
									<Outlet context={vanData} />
								</div>
							</>
						)}
					</Await>
				</Suspense>
			</div>
		</div>
	);
}