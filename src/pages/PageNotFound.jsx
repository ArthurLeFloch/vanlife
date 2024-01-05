import React from "react";

import { Link } from "react-router-dom";

export default function PageNotFound() {
	return (
		<div className="page-not-found">
			<h1>Sorry, the page you were looking for could not be found.</h1>
			<Link to="/"
				className="page-not-found--button"
			>
				Return to Home
			</Link>
		</div>
	);
}