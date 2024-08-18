import React from "react";
import "./Exhibitions.css";
import NavbarBottom from "../NavbarBottom/NavbarBottom";

//assets
import { ImLocation } from "react-icons/im";

function Exhibitions() {
	return (
		<>
			<div className="exhibitions">
				<div className="upcoming exhibitionTitle">
					<h2>Upcoming Events</h2>
					<div className="upcomingExhibitions">
						<div className="upcomingEvent">
							<div className="upcomingMain">
								<div className="upcomingInfo">
									<h2>Pop up art galerie</h2>
									<p>
										{" "}
										Waitzstrasse 11, <br /> 22607 Hamburg
									</p>
								</div>
								<div className="upcomingActionBtn">
									<button className="upcomingViewEvent">see event</button>
									<button className="upcomingViewLocation">
										<ImLocation size={25} color="#d5573b" />
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
				</div>
			</div>
			<NavbarBottom />
		</>
	);
}

export default Exhibitions;
