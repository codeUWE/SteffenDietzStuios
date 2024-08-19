import React from "react";
import "./Exhibitions.css";
import NavbarBottom from "../NavbarBottom/NavbarBottom";

//assets
import { ImLocation } from "react-icons/im";

function Exhibitions() {
	// checking if exhibition has started
	const isCurrentEvent = (startDate, endDate) => {
		const now = new Date();
		//checks if actual date is similar or between startDate and endDate
		return now >= new Date(startDate) && now <= new Date(endDate);
	};

	return (
		<>
			<div className="exhibitions">
				<div className="upcoming exhibitionTitle">
					<h2>Upcoming Events</h2>
					<div className="upcomingExhibitions">
						<div className="upcomingEvent">
							<div className="upcomingMain">
								<div className="upcomingInfo">
									<h2>Title</h2>
									<div className="eventSecondary">
										<div className="eventAddress">
											<p>streetAndNumber</p>
											<p>CityCode CityName</p>
										</div>
										<div className={`${isCurrentEvent ? "live" : "hidden"}`}>
											<h5>Ongoing</h5>
											<div id="liveIndicator"></div>
										</div>
									</div>
								</div>
								<div className="upcomingActionBtn">
									<button className="upcomingViewEvent">see event</button>
									<button className="upcomingViewLocation">
										<ImLocation size={25} color="#7c7a7a" />
									</button>
								</div>
							</div>
							<div className="upcomingDate">
								<h3>04. Jul. 2024 - 03. Aug 2024</h3>
							</div>
						</div>
					</div>
				</div>
				<div className="previous exhibitionTitle">
					<h2> Previous Events</h2>
					<div className="previousExhibitions">
						<div className="previousEvent">
							<div className="previousMain">
								<div className="previousInfo">
									<h2>Title</h2>
									<p>City</p>
								</div>
								<div className="previousActionBtn">
									<button className="previousViewInstagram">see event</button>
								</div>
							</div>
							<div className="previousDate">
								<h3>04. Jul. 2024 - 03. Aug 2024</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
			<NavbarBottom />
		</>
	);
}

export default Exhibitions;
