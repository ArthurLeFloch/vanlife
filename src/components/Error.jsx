import React from "react";
import { useRouteError } from "react-router-dom";

export default function Error() {
	const error = useRouteError();
	console.log(error);

	return (
		<div className="error">
			<h1>Error: {error.message}</h1>
			<pre>{error.status} - {error.statusText}</pre>
		</div>
	);
}