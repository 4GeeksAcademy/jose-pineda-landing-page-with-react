import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Cards.jsx";

function Home() {
	return (
	  <div className="container-fluid p-0">
		<Navbar />
		<div className="container">
		  <div className="row">
			<div className="col-12">
			  <Jumbotron />
			</div>
		  </div>
		  <div className="row pb-5">
			<div className="col-xl-3 col-md-4 col-lg-3">
			  <Card
				imageUrl="https://placehold.co/500x325"
				cardTitle="Card Title"
				cardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
				buttonUrl="https://reactjs.org/"
				buttonLabel="Find Out More!"
			  />
			</div>
			<div className="col-xl-3 col-md-4 col-lg-3">
			  <Card
				imageUrl="https://placehold.co/500x325"
				cardTitle="Card Title"
				cardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				buttonUrl="https://reactjs.org/"
				buttonLabel="Find Out More!"
			  />
			</div>
			<div className="col-xl-3 col-md-4 col-small-3">
			  <Card
				imageUrl="https://placehold.co/500x325"
				cardTitle="Card Title"
				cardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
				buttonUrl="https://reactjs.org/"
				buttonLabel="Find Out More!"
			  />
			</div>
			<div className="col-xl-3 col-md-4 col-lg-3">
			  <Card
				imageUrl="https://placehold.co/500x325"
				cardTitle="Card Title"
				cardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate."
				buttonUrl="https://reactjs.org/"
				buttonLabel="Find Out More!"
			  />
			</div>
		  </div>
		</div>
			<footer className="footer py-3 bg-dark">
				<div className="container">
					<p className="text-white text-center">
						Copyright© Your Website 2023</p>
				</div>
			</footer>
		</div>
	);
};

export default Home;