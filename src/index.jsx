import React from "react";
import { createRoot } from "react-dom/client";
import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route
} from "react-router-dom";

import "./style.css";

import Home from "./pages/Home";

import Vans, { loader as vansLoader } from "./pages/Vans/Vans";
import VanDetail, { loader as vanDetailLoader } from "./pages/Vans/VanDetail";

import Dashboard, { loader as dashboardLoader } from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import HostVans, { loader as hostVansLoader } from "./pages/Host/HostVans";
import HostVanDetails, { loader as hostVanDetailsLoader } from "./pages/Host/HostVanDetails";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import HostVanPricing from "./pages/Host/HostVanPricing";
import Reviews from "./pages/Host/Reviews";

import About from "./pages/About";

import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";

import Login, { loader as loginLoader, action as loginAction } from "./pages/Login";

import PageNotFound from "./pages/PageNotFound";
import Error from "./components/Error";

import { requireAuth } from "./utils";

localStorage.setItem("loggedIn", false);

const router = createBrowserRouter(createRoutesFromElements(
	<Route path="/" element={<Layout />}>
		<Route index element={<Home />} />
		<Route path="host" element={<HostLayout />}
			loader={async ({ request }) => await requireAuth(request)}
		>
			<Route index element={<Dashboard />}
				loader={dashboardLoader}
			/> {/* localhost:3000/host */}
			<Route path="income" element={<Income />}
				loader={async ({ request }) => await requireAuth(request)}
			/> {/* localhost:3000/host/income */}
			<Route path="vans" element={<HostVans />}
				loader={hostVansLoader}
				errorElement={<Error />}
			/>
			<Route path="vans/:id" element={<HostVanDetails />}
				loader={hostVanDetailsLoader}
				errorElement={<Error />}
			>
				<Route index element={<HostVanInfo />}
					loader={async ({ request }) => await requireAuth(request)}
				/>
				<Route path="pricing" element={<HostVanPricing />}
					loader={async ({ request }) => await requireAuth(request)}
				/>
				<Route path="photos" element={<HostVanPhotos />}
					loader={async ({ request }) => await requireAuth(request)}
				/>
			</Route>
			<Route path="reviews" element={<Reviews />}
				loader={async ({ request }) => await requireAuth(request)}
			/>
		</Route>
		<Route path="about" element={<About />} />
		<Route path="vans" element={<Vans />} loader={vansLoader} errorElement={<Error />} />
		<Route path="vans/:id" element={<VanDetail />} loader={vanDetailLoader} errorElement={<Error />} />
		<Route path="login" element={<Login />} loader={loginLoader} action={loginAction} />
		<Route path="*" element={<PageNotFound />} />
	</Route>
), { basename: process.env.PUBLIC_URL });


createRoot(document.getElementById("root")).render(
	<RouterProvider router={router} />
);
