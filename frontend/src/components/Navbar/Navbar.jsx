import "./Navbar.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

//assets
import { HiMenuAlt3 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import { RiHomeLine } from "react-icons/ri";

function Navbar() {
	const navigate = useNavigate();
	const location = useLocation(); // Use the hook to get the current URL

	//menu settings
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuRef = useRef(null);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	useEffect(() => {
		// Access the main element that wraps the main content
		const mainContent = document.querySelector("main");
		if (isMenuOpen) {
			mainContent.classList.add("blur-background");
		} else {
			mainContent.classList.remove("blur-background");
		}

		// Add event listener when menu is open
		if (isMenuOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}

		// Cleanup the event listener
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
			mainContent.classList.remove("blur-background");
		};
	}, [isMenuOpen]);

	// Close the menu if clicked outside
	const handleClickOutside = (event) => {
		if (menuRef.current && !menuRef.current.contains(event.target)) {
			setIsMenuOpen(false);
		}
	};

	// Handle link click and close the menu
	const handleLinkClick = (path) => {
		navigate(path);
		setIsMenuOpen(false); // Close the menu
	};

	// Wraps each character in a span element for custom spacing
	const wrapCharactersInSpans = (text) => {
		return text.split("").map((char, index) => <span key={index}>{char}</span>);
	};

	// Function to determine the current page and apply the corresponding menu item highlight
	const isActive = (path) => {
		return location.pathname === path ? "active" : "";
	};

	// Determine the text to display based on the current route
	const getCurrentPageText = () => {
		switch (location.pathname) {
			case "/":
				return "STUDIOS";
			case "/about":
				return "ABOUT";
			case "/artworks":
				return "ARTWORKS";
			case "/exhibitions":
				return "EXHIBITIONS";
			case "/contact":
				return "CONTACT";
			default:
				return "STUDIOS";
		}
	};

	return (
		<>
			<nav>
				<div className="navGrid">
					<div className="logo" onClick={() => navigate("/")}>
						<h2>Steffen</h2>
						<h2>Dietz</h2>
					</div>
					<div className="menu">
						<button onClick={toggleMenu}>
							<HiMenuAlt3 size={35} />
						</button>
					</div>
					{/* Dynamic text based on the current route */}
					<h3 className="stretch">
						{wrapCharactersInSpans(getCurrentPageText())}
					</h3>
				</div>
			</nav>

			{/* side menu */}
			<div ref={menuRef} className={`sideMenu ${isMenuOpen ? "open" : ""}`}>
				<button onClick={toggleMenu} className="closeMenu">
					<IoCloseOutline size={30} />
				</button>
				<ul>
					<li className={isActive("/")} onClick={() => handleLinkClick("/")}>
						<RiHomeLine />
					</li>
					<li
						className={isActive("/about")}
						onClick={() => handleLinkClick("/about")}
					>
						about
					</li>
					<li
						className={isActive("/artworks")}
						onClick={() => handleLinkClick("/artworks")}
					>
						artworks
					</li>
					<li
						className={isActive("/exhibitions")}
						onClick={() => handleLinkClick("/exhibitions")}
					>
						exhibitions
					</li>
				</ul>
				<div className="sideActions">
					<button
						className="contact"
						onClick={() => handleLinkClick("/contact")}
					>
						contact
					</button>
				</div>
			</div>
		</>
	);
}

export default Navbar;
