const express = require('express');
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let vanIndex = 0;
let userIndex = 0;

function createVan(name, price, description, imageUrl, type, hostId) {
	return {
		id: `${vanIndex++}`,
		name: name,
		price: price,
		description: description,
		imageUrl: imageUrl,
		type: type,
		hostId: hostId,
	};
}

function createUser(name, email, password) {
	return {
		id: `${userIndex++}`,
		name: name,
		email: email,
		password: password,
	};
}

const vans = [
	createVan("Modest Explorer", 60, "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!", "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png", "simple", "123"),
	createVan("Beach Bum", 80, "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.", "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png", "rugged", "123"),
	createVan("Reliable Red", 100, "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.", "https://assets.scrimba.com/advanced-react/react-router/reliable-red.png", "luxury", "456"),
	createVan("Dreamfinder", 65, "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.", "https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png", "simple", "789"),
	createVan("The Cruiser", 120, "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.", "https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png", "luxury", "789"),
	createVan("Green Wonder", 70, "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.", "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png", "rugged", "123"),
];

const users = [
	createUser("John Doe", "john.doe@gmail.com", "123"),
];

app.listen(3000, () => {
	console.log('Server listening on port 3000');
});

app.get('/vans', (req, res) => {
	res.json(vans);
});

app.get('/vans/:id', (req, res) => {
	const van = vans.find((van) => van.id === req.params.id);
	res.json(van);
});

app.get('/host', (req, res) => {
	res.json(users);
});

app.get('/host/vans', (req, res) => {
	const hostId = "123"; // Number(req.params.id); // Hardcoded for now
	const hostVans = vans.filter((van) => van.hostId === hostId);
	res.json(hostVans);
});

app.get('/host/vans/:id', (req, res) => {
	const van = vans.find((van) => van.id === req.params.id);
	res.json(van);
});

app.post('/login', (req, res) => {
	const { email, password } = req.body;
	console.log(`Received login request for email: ${email}`);
	const foundUser = users.filter((user) => (user.email == email && user.password == password));
	if (foundUser.length !== 1) {
		res.status(401).json({ message: "Invalid credentials" });
		return;
	}

	// Proper authentication is not the purpose of this demo
	delete foundUser.password;
	res.json({
		name: foundUser.name,
		email: foundUser.email,
		token: "token",
	});
});
