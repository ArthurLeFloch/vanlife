# VANLIFE

After building a **one-page** [website in PHP / JS](https://github.com/ArthurLeFloch/Garage) by hand, I got interested in React.

This repository contains my implementation of the project from the [React Router 6 course](https://youtu.be/nDGA3km5He4).

## Installation

First, you need to clone the repository:
```bash
git clone https://github.com/ArthurLeFloch/vanlife.git
```

#### By hand
1. Navigate to the project folder: `cd vanlife`
2. Install dependencies for the React app: `cd client && npm install`
3. Install dependencies for the server: `cd server && npm install`

#### Using docker
```bash
sudo docker compose build
sudo PORT=3000 docker compose up -d # Default port is 8080
```

## Repository Structure
`server`:
Contains an `api.js` file, which has to be launched using `node api.js`.
  
`public`:
Folder initially created using `npx create-react-app`, then switched to `Vite`.

`client`:
React app.

## Usage
1. The server needs to be launched using `cd server && node api.js`.
2. To run the development server, run `npm start` at the root of the project.

Now, the website can be seen at [http://localhost:5173](http://localhost:5173).

Some pages are not accessible without being logged in (`/host` and all nested pages). To log in, use the following credentials:
- username: `john.doe@gmail.com`
- password: `123`

The aim of this project is not to achieve a true authentication, but rather to provide a structure capable of supporting it.

In particular, the token returned by the API is not used.
