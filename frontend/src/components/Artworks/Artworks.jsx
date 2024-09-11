import React, { useState, useEffect } from "react";
import "./Artworks.css";
import NavbarBottom from "../NavbarBottom/NavbarBottom.jsx";

function Artworks() {
	// State to store the fetched paintings data
	const [paintings, setPaintings] = useState([]);
	const [loading, setLoading] = useState(true); // State to handle loading status

	// Fetch data from the API when the component mounts
	useEffect(() => {
		const fetchData = async () => {
			try {
				// Fetch paintings data from your API endpoint
				const response = await fetch(
					"https://steffendietzstuios.onrender.com/api/paintings"
				);
				let data = await response.json();

				// Sort the paintings in the frontend based on the createdAt field (descending order)
				data = data.sort(
					(a, b) => new Date(b.createdAt) - new Date(a.createdAt)
				);

				setPaintings(data); // Set the fetched and sorted data in state
				setLoading(false); // Turn off loading state
			} catch (error) {
				console.error("Error fetching paintings:", error);
				setLoading(false); // Turn off loading state in case of error
			}
		};

		fetchData();
	}, []);

	return (
		<>
			<div className="artworks-container">
				{loading ? (
					<p>Loading artworks...</p>
				) : (
					paintings.map((painting, index) => (
						<div key={index} className="artwork">
							<div className="artwork-image">
								<img
									src={painting.image_url} // Use the image_url from the backend
									alt={`${painting.title} by ${painting.artist}`}
								/>
							</div>
							<div className="artwork-info">
								<h2>{painting.title}</h2>
								<h3>{painting.artist}</h3>
								<p>{`${painting.year} // ${painting.dimensions} // ${painting.type}`}</p>
							</div>
						</div>
					))
				)}
			</div>
			<NavbarBottom />
		</>
	);
}

export default Artworks;
