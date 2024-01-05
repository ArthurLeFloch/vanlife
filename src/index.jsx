import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./style.css";

import Home from "./pages/Home";

import Vans from "./pages/Vans/Vans";
import VanDetail from "./pages/Vans/VanDetail";

import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import HostVans from "./pages/Host/HostVans";
import HostVanDetails from "./pages/Host/HostVanDetails";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import HostVanPricing from "./pages/Host/HostVanPricing";
import Reviews from "./pages/Host/Reviews";

import About from "./pages/About";

import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="host" element={<HostLayout />} >
						<Route index element={<Dashboard />} /> {/* localhost:3000/host */}
						<Route path="income" element={<Income />} /> {/* localhost:3000/host/income */}
						<Route path="vans" element={<HostVans />} />
						<Route path="vans/:id" element={<HostVanDetails />} >
							<Route index element={<HostVanInfo />} />
							<Route path="pricing" element={<HostVanPricing />} />
							<Route path="photos" element={<HostVanPhotos />} />
						</Route>
						<Route path="reviews" element={<Reviews />} />
					</Route>
					<Route path="about" element={<About />} />
					<Route path="vans" element={<Vans />} />
					<Route path="vans/:id" element={<VanDetail />} />
				</Route>
			</Routes>
		</Router>
	);
}


createRoot(document.getElementById("root")).render(
	<App />
);
