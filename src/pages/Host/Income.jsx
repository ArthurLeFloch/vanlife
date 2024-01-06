import React from "react";

import image from "../../assets/income-graph.png";

export default function Income() {
	const transactions = [
		{ amount: 720, date: "Jan 3, '23", id: "1" },
		{ amount: 560, date: "Dec 12, '22", id: "2" },
		{ amount: 980, date: "Dec 3, '22", id: "3" },
	];

	function renderTransactions() {
		return transactions.map((transaction) => {
			return (
				<div className="income--transaction" key={transaction.id}>
					<h1 className="income--transaction-amount">${transaction.amount}</h1>
					<p className="income--transaction-date">{transaction.date}</p>
				</div>
			);
		});
	}

	return (
		<div className="income">
			<h1>Income</h1>
			<p>Last <span className="dashboard--duration">30 days</span></p>
			<p className="dashboard--income">$2,260</p>
			<img src={image} alt="Income graph" className="income--graph" />
			<h2>Your transactions ({transactions.length})</h2>
			<div className="income--transactions">
				{renderTransactions()}
			</div>

		</div>
	);
}