import React from "react";
import { Link, useParams } from "react-router-dom";

export default function VanDetail() {
	const params = useParams();

	const [vanData, setVanData] = React.useState(null);

	React.useEffect(() => {
		fetch("http://localhost:3001/vans/" + params.id)
			.then((res) => res.json())
			.then((data) => setVanData(data));
	}, [params.id]);

	return (
		<div className="van-details">
			{vanData ? (
				<>
					<Link to="/vans" className="van-details--back">
						<i className="van-details--arrow fas fa-arrow-left"></i>
						Back to all vans
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
				</>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
}