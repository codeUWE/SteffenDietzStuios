import React from "react";
import "./Exhibitions.css";

import NavbarBottom from "../NavbarBottom/NavbarBottom";

function Exhibitions() {
	return (
		<>
			<div className="dates">
				<div className="ongoing">
					<h2>Ongoing Exhibitions</h2>
				</div>
				<div className="upcoming">
					<h2>Upcoming Exhibitions</h2>
				</div>
				<div className="previous">
					<h2> Previous Exhibitions</h2>
				</div>
			</div>
			<NavbarBottom />
		</>
	);
}

export default Exhibitions;
