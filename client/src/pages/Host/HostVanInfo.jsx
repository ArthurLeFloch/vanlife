import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanInfo() {
	const van = useOutletContext();

	return (
		<>
			<p><b>Name:</b> {van.name}</p>
			<p><b>Type:</b> {van.type}</p>
			<p><b>Description:</b> {van.description}</p>
		</>
	);
}