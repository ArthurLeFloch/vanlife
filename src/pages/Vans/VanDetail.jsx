import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";

export default function VanDetail() {
	const location = useLocation();
	const params = useParams();

	const [vanData, setVanData] = React.useState(null);

	React.useEffect(() => {
		fetch("http://localhost:3001/vans/" + params.id)
			.then((res) => res.json())
			.then((data) => setVanData(data));
	}, [params.id]);

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
			{vanData ? (
				<>
					<img src={vanData.imageUrl} alt={vanData.name} className="van-details--image" />
					<p className={"vans--type " + vanData.type}>{vanData.type}</p>
					<h1 className="van-details--title">{vanData.name}</h1>
					<p className="van-details--price-text">
						<span className="van-details--price">${vanData.price}</span>
						/day
					</p>
					<p>{vanData.description}</p>
					<button className="van-details--rent">Rent this van</button>
				</>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
}