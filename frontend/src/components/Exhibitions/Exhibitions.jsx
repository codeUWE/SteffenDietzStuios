import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Exhibitions.css";

// Import the location icon from react-icons
import { ImLocation } from "react-icons/im";

function Exhibitions() {
	// Initialize state to store upcoming and previous events
	const [upcomingEvents, setUpcomingEvents] = useState([]);
	const [previousEvents, setPreviousEvents] = useState([]);
	const navigate = useNavigate();

	const isCurrentEvent = (startDate, endDate) => {
		const now = new Date();

		// Set endDate to the end of the day (23:59:59)
		const endOfDay = new Date(endDate);
		endOfDay.setHours(23, 59, 59, 999);

		return now >= new Date(startDate) && now <= endOfDay;
	};

	/**
	 * Fetch exhibitions data from the API and categorize them into upcoming and previous events
	 */
	useEffect(() => {
		const fetchData = async () => {
			try {
				// Ändere den API-Endpunkt zu deiner Render-URL
				const response = await fetch(
					"https://steffendietzstuios.onrender.com/api/exhibitions"
				);
				const data = await response.json();

				const now = new Date();

				const todayStart = new Date();
				todayStart.setHours(0, 0, 0, 0);

				const upcoming = data.filter((event) => {
					const endOfDay = new Date(event.endDate);
					endOfDay.setHours(23, 59, 59, 999);
					return endOfDay >= todayStart;
				});

				const previous = data.filter((event) => {
					const endOfDay = new Date(event.endDate);
					endOfDay.setHours(23, 59, 59, 999);
					return endOfDay < todayStart;
				});

				setUpcomingEvents(upcoming);
				setPreviousEvents(previous);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<>
			<div className="exhibitions">
				{/* Section for Upcoming Events */}
				<div className="upcoming exhibitionTitle">
					<h2>Upcoming Events</h2>
					<div className="upcomingExhibitions">
						{upcomingEvents.map((event) => (
							<div key={event._id} className="upcomingEvent">
								<div className="upcomingMain">
									<div className="upcomingInfo">
										<h2>{event.title}</h2>
										<div
											className={
												isCurrentEvent(event.startDate, event.endDate)
													? "live"
													: "hidden"
											}
										>
											<h5>Ongoing</h5>
											<div id="liveIndicator"></div>
										</div>
										<div className="eventAddress">
											<p>{event.streetAndNumber}</p>
											<p>{`${event.code} ${event.city}`}</p>
										</div>
									</div>
									<div
										className={`upcomingActionBtn ${
											isCurrentEvent(event.startDate, event.endDate)
												? "live"
												: "hidden"
										}`}
									>
										<button
											onClick={() => window.open(event.eventUrl, "_blank")}
										>
											see event
										</button>
										<button
											className="upcomingViewLocation"
											onClick={() => window.open(event.googleMapsUrl, "_blank")}
										>
											<ImLocation size={24} color="#7c7a7a" />
										</button>
									</div>
								</div>
								<div className="upcomingDate">
									<h3>
										{new Date(event.startDate).toLocaleDateString("en-US", {
											day: "2-digit",
											month: "short",
											year: "numeric",
										})}{" "}
										-{" "}
										{new Date(event.endDate).toLocaleDateString("en-US", {
											day: "2-digit",
											month: "short",
											year: "numeric",
										})}
									</h3>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Section for Previous Events */}
				<div className="previous exhibitionTitle">
					<h2>Previous Events</h2>
					<div className="previousExhibitions">
						{previousEvents.map((event) => (
							<div key={event._id} className="previousEvent">
								<div className="previousMain">
									<div className="previousInfo">
										<h2>{event.title}</h2>
										<p>{event.city}</p>
									</div>
								</div>
								<div className="previousDate">
									<h3>
										{new Date(event.startDate).toLocaleDateString("en-US", {
											day: "2-digit",
											month: "short",
											year: "numeric",
										})}{" "}
										-{" "}
										{new Date(event.endDate).toLocaleDateString("en-US", {
											day: "2-digit",
											month: "short",
											year: "numeric",
										})}
									</h3>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="navBottom"></div>
		</>
	);
}

export default Exhibitions;
