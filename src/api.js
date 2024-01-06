export async function getVans(id) {
	const url = id ? `http://localhost:3001/vans/${id}` : "http://localhost:3001/vans";
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
	const url = id ? `http://localhost:3001/host/vans/${id}` : "http://localhost:3001/host/vans";
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
	const res = await fetch("http://localhost:3001/login", {
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