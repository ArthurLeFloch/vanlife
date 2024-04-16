import React from "react";
import { useLoaderData, Form, redirect, useActionData, useNavigation } from "react-router-dom";

import { loginUser } from "../api";

export function loader({ request }) {
	return new URL(request.url).searchParams.get("message");
}

export async function action({ request }) {
	const formData = await request.formData();
	const email = formData.get("email");
	const password = formData.get("password");

	const pathname = new URL(request.url).searchParams.get("redirectTo") || "/host";
	try {
		await loginUser({ email, password });
		localStorage.setItem("loggedIn", true);
		return redirect(pathname);
	} catch (error) {
		return error.message;
	}
}

export default function Login() {
	const navigation = useNavigation();
	const loginMessage = useLoaderData();
	// const navigate = useNavigate();
	const errorMessage = useActionData();

	return (
		<div className="login">
			<h1>Sign in to your account</h1>
			{loginMessage && <p className="login--message">{loginMessage}</p>}
			{errorMessage && <p className="login--error">{errorMessage}</p>}
			<Form className="login--form" method="post" replace>
				<div className="login--group">
					<input className="login--input" type="email" name="email" placeholder="Email" />
					<input className="login--input" type="password" name="password" placeholder="Password" />
				</div>
				<button className="login--button" disabled={navigation.state === "submitting"}>
					{navigation.state === "submitting" ? "Logging in..." : "Log in"}
				</button>
			</Form>
		</div>
	);
}