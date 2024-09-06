import React, { useState, useEffect } from "react";
import BarLoader from "react-spinners/BarLoader";
import "./Homepage.css";

function Homepage() {
	const [loading, setLoading] = useState(false);

	// Check if 10 minutes have passed since the last visit
	useEffect(() => {
		const lastVisit = localStorage.getItem("lastVisit");
		const now = new Date().getTime();
		const tenMinutes = 10 * 60 * 1000; // 10 minutes in milliseconds

		if (!lastVisit || now - lastVisit > tenMinutes) {
			setLoading(true);
			localStorage.setItem("lastVisit", now);
		}
	}, []);

	// Minimum loading time (e.g., 1.5 seconds)
	useEffect(() => {
		if (loading) {
			const timer = setTimeout(() => {
				setLoading(false);
			}, 1500); // 1.5 seconds

			return () => clearTimeout(timer);
		}
	}, [loading]);

	return (
		<>
			<div className="paintings">
				{loading && (
					<div className="loadingBar">
						<BarLoader color="#211f1f" width="70%" />
					</div>
				)}

				{!loading && (
					<div className="paintingContainer">
						<div className="painting">
							<img src="assets\Paintings\DUO.jpeg" alt="Paintings" />
						</div>
						<div className="paintingInfo">
							<h2>DUO</h2>
							<h3>Steffen Dietz</h3>
							<p>2024 // 180x130cm // Acryl auf Canvas</p>
						</div>
					</div>
				)}
			</div>
		</>
	);
}

export default Homepage;
