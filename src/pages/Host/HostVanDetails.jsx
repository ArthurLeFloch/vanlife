import React from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";

export default function HostVanDetails() {
	const params = useParams();
	const [vanData, setVanData] = React.useState(null);

	React.useEffect(() => {
		fetch("http://localhost:3001/host/vans/" + params.id)
			.then((res) => res.json())
			.then((data) => setVanData(data));
	}, [params.id]);

	return (
		<div className="host-van-details">
			<Link to=".." relative="path" className="back">
				<i className="back-arrow fas fa-arrow-left"></i>
				Back to all vans
			</Link>
			{vanData ? (
				<div className="host-van-details--content">
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
				</div>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
}