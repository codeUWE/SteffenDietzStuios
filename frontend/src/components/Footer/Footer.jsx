import React from "react";

import "./Footer.css";
import { useNavigate } from "react-router-dom";

function Footer() {
	const navigate = useNavigate();

	return (
		<div className="footer">
			<div className="copyright">
				<p>© 2023 Steffen Dietz</p>
				<p className="legalNotice" onClick={() => navigate("/legal-notice")}>
					Legal Notice
				</p>
			</div>
			{/* <div>
				<p>
					Website created by{" "}
					<a
						href="https://your-portfolio.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						Your Name
					</a>
				</p>
			</div> */}
		</div>
	);
}

export default Footer;
