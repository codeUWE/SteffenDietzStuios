import "./Footer.css";
import { useNavigate } from "react-router-dom";

function Footer() {
	const navigate = useNavigate();

	return (
		<div className="copyright">
			<p>© 2023 Steffen Dietz</p>
			<p className="legalNotice" onClick={() => navigate("/legal-notice")}>
				Legal Notice
			</p>
		</div>
	);
}

export default Footer;
