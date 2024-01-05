import React from "react";

export default function Login() {
	const [loginData, setLoginData] = React.useState({ email: "", password: "" });

	function handleChange(e) {
		setLoginData({ ...loginData, [e.target.name]: e.target.value });
	}

	function handleSubmit(e) {
		e.preventDefault();
	}

	return (
		<div className="login">
			<h1>Sign in to your account</h1>
			<form onSubmit={handleSubmit} className="login--form">
				<div className="login--group">
					<input className="login--input" type="email" id="email" name="email" value={loginData.email} onChange={handleChange} placeholder="Email" />
					<input className="login--input" type="password" id="password" name="password" value={loginData.password} onChange={handleChange} placeholder="Password" />
				</div>
				<button className="login--button">Login</button>
			</form>
		</div>
	);
}