import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
	const van = useOutletContext();
	
	return (
		<p className="host-van-pricing-text">
			<b className="host-van-pricing">${van.price}</b>
			/day
		</p>
	);
}