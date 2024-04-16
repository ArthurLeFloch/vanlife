import React from "react";

import image from "../../assets/reviews-graph.png";

export default function Reviews() {
	const reviews = [
		{
			rating: 5,
			name: "Elliot",
			date: "January 3, 2023",
			text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
			id: "1",
		},
		{
			rating: 5,
			name: "Sandy",
			date: "December 12, 2022",
			text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
			id: "2",
		},
	];

	function renderStars(amount) {
		const stars = [];
		for (let i = 0; i < amount; i++) {
			stars.push(<i className="dashboard--star fas fa-star" key={i}></i>);
		}
		return stars;
	}

	function renderReviews() {
		return reviews.map((review) => {
			return (
				<div className="reviews--review" key={review.id}>
					<div className="reviews--review-header">
						<div className="reviews--review-rating">
							{renderStars(review.rating)}
						</div>
						<p className="reviews--review-name"><b>{review.name}</b> {review.date}</p>
					</div>
					<p className="reviews--review-text">{review.text}</p>
					<hr />
				</div>
			);
		});
	}

	return (
		<div className="reviews">
			<h1>Your reviews</h1>
			<p>Last <span className="dashboard--duration">30 days</span></p>
			<img src={image} alt="Reviews graph" className="reviews--graph" />
			<h2>Reviews ({reviews.length})</h2>
			<div className="reviews--reviews">
				{renderReviews()}
			</div>
		</div>
	);
}