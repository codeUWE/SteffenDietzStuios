import "./Artworks.css";

import NavbarBottom from "../NavbarBottom/NavbarBottom.jsx";

//assets
import painting1 from "../../assets/Paintings/painting1.png";
import painting2 from "../../assets/Paintings/painting2.png";
import painting3 from "../../assets/Paintings/painting3.png";
import painting4 from "../../assets/Paintings/painting4.png";
import painting5 from "../../assets/Paintings/painting5.png";

function Artworks() {
	return (
		<>
			<div id="artworks">
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
				<div className="paintings">
					<div className="painting">
						<img src={painting2} alt="" />
					</div>
					<div className="paintingInfo">
						<h2>Titel</h2>
						<h3>Steffen Dietz</h3>
						<p>140x190 // Acryl auf Canvas</p>
					</div>
				</div>
				<div className="paintings">
					<div className="painting">
						<img src={painting3} alt="" />
					</div>
					<div className="paintingInfo">
						<h2>Titel</h2>
						<h3>Steffen Dietz</h3>
						<p>140x190 // Acryl auf Canvas</p>
					</div>
				</div>
				<div className="paintings">
					<div className="painting">
						<img src={painting4} alt="" />
					</div>
					<div className="paintingInfo">
						<h2>Titel</h2>
						<h3>Steffen Dietz</h3>
						<p>140x190 // Acryl auf Canvas</p>
					</div>
				</div>
				<div className="paintings">
					<div className="painting">
						<img src={painting5} alt="" />
					</div>
					<div className="paintingInfo">
						<h2>Titel</h2>
						<h3>Steffen Dietz</h3>
						<p>140x190 // Acryl auf Canvas</p>
					</div>
				</div>
			</div>
			<NavbarBottom />
		</>
	);
}

export default Artworks;
