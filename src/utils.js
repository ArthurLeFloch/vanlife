import { redirect } from "react-router-dom";

export async function requireAuth(request) {
	const isLoggedIn = localStorage.getItem("loggedIn");

	const env = process.env.PUBLIC_URL;
	const pathname = new URL(request.url).pathname.replace(env, "");

	if (isLoggedIn === "false") {
		throw redirect("/login?message=You must log in first&redirectTo=" + pathname);
	}

	return null; 
}