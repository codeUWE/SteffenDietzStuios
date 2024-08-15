import "./Homepage.css";
import { useNavigate } from "react-router-dom";

//components
import NavbarBottom from "../NavbarBottom/NavbarBottom";

import painting1 from "../../assets/Paintings/painting1.png";

function Homepage() {
	const navigate = useNavigate();

	return (
		<>
			<div className="paintings">
				<div className="painting">
					<img src={painting1} alt="" />
				</div>
				<div className="paintingInfo">
					<h2>Titel</h2>
					<h3>Steffen Dietz</h3>
					<p>140x190 // Acryl auf Canvas</p>
				</div>
			</div>
			<div className="actions">
				<button className="artworks" onClick={() => navigate("/artworks")}>
					artworks
				</button>
			</div>
			<NavbarBottom />
		</>
	);
}

export default Homepage;
