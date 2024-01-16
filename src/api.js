const server = "http://localhost:3001";

export async function getVans(id) {
	const url = id ? `${server}/vans/${id}` : `${server}/vans`;
	const res = await fetch(url);
	if (!res.ok) {
		const error = new Error("Failed to fetch vans");
		error.statusText = res.statusText;
		error.status = res.status;
		throw error;
	}
	const data = await res.json();
	return data;
}

export async function getHostVans(id) {
	const url = id ? `${server}/host/vans/${id}` : `${server}/host/vans`;
	const res = await fetch(url);
	if (!res.ok) {
		const error = new Error("Failed to fetch vans from host");
		error.statusText = res.statusText;
		error.status = res.status;
		throw error;
	}
	const data = await res.json();
	return data;
}

export async function loginUser(credentials) {
	const res = await fetch(`${server}/login`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(credentials),
	});

	const data = await res.json();

	if (!res.ok) {
		const error = new Error("Failed to login user");
		error.statusText = res.statusText;
		error.status = res.status;
		throw error;
	}

	return data;
}