import React from "react";
import { Outlet, Navigate } from "react-router-dom";

// Unused component, as requireAuth is used instead
export default function AuthRequired() {
	const isLoggedIn = false;
	if (!isLoggedIn) {
		return <Navigate to="/login" />;
	}
	return <Outlet />;
}