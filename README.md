# VANLIFE

After building a **one-page** [website in PHP / JS](https://github.com/ArthurLeFloch/Garage) by hand, I got interested in React.

This repository contains my implementation of the project from the [React Router 6 course](https://youtu.be/nDGA3km5He4).

## Installation
1. Clone the repository: `git clone https://github.com/ArthurLeFloch/vanlife.git`
2. Navigate to the project folder: `cd vanlife`
3. Install dependencies: `npm install`
4. Install dependencies for the server: `cd server && npm install`

## Repository Structure
`server`:
Contains an `api.js` file, which has to be launched using `node api.js`.
  
`public`:
Folder initially created using `npx create-react-app`, containing `index.html`.

`src`:
JSX elements, and a `style.css` file.

## Usage
1. The server needs to be launched using `node api.js`.
2. To run the development server, run `npm start`.

Now, the website can be seen at [http://localhost:3000](http://localhost:3000).
