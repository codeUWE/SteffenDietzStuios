import React from "react";
import "./Navbar.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

//assets
import { HiMenuAlt3 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import { RiHomeLine } from "react-icons/ri";
import { PiInstagramLogoThin } from "react-icons/pi";

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
		// Access the main and footer elements that wrap the content
		const mainContent = document.querySelector("main");
		const footerContent = document.querySelector("footer");

		if (isMenuOpen) {
			mainContent.classList.add("blur-background");
			footerContent.classList.add("blur-background");
		} else {
			mainContent.classList.remove("blur-background");
			footerContent.classList.remove("blur-background");
		}

		// Add event listener when menu is open
		if (isMenuOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}

		// Cleanup function to remove event listener and blur effect
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
			mainContent.classList.remove("blur-background");
			footerContent.classList.remove("blur-background");
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
		window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top
		navigate(path);
		setIsMenuOpen(false); // Close the menu
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
				return "about";
			case "/artworks":
				return "works";
			case "/exhibitions":
				return "exhibitions";
			case "/contact":
				return "contact";
			default:
				return "STUDIOS";
		}
	};

	return (
		<nav>
			<div className="navGrid">
				<div className="logo" onClick={() => handleLinkClick("/")}>
					<h2>Steffen</h2>
					<h2>Dietz</h2>
				</div>

				<div className="menuIcon">
					<button onClick={toggleMenu}>
						<HiMenuAlt3 size={35} />
					</button>
				</div>
				<div className="instagramIcon">
					<PiInstagramLogoThin
						size={30}
						onClick={() => {
							const instagramAppLink =
								"instagram://user?username=steffen.dietz.art";
							const instagramWebLink =
								"https://www.instagram.com/steffen.dietz.art/?locale=de&hl=am-et";
							window.location.href = instagramAppLink;
							setTimeout(() => {
								window.location.href = instagramWebLink;
							}, 1000);
						}}
					/>
				</div>

				<h3 className="currentPage">{getCurrentPageText()}</h3>

				{/* Horizontal menu for tablets and larger screens */}
				<ul className="navLinks">
					<li
						className={isActive("/artworks")}
						onClick={() => handleLinkClick("/artworks")}
					>
						WORKS
					</li>
					<li
						className={isActive("/exhibitions")}
						onClick={() => handleLinkClick("/exhibitions")}
					>
						EXHIBITIONS
					</li>
					<li
						className={isActive("/about")}
						onClick={() => handleLinkClick("/about")}
					>
						ABOUT
					</li>
					<li
						className={isActive("/contact")}
						onClick={() => handleLinkClick("/contact")}
					>
						CONTACT
					</li>
				</ul>
			</div>

			{/* side menu for smaller screens */}
			<div ref={menuRef} className={`sideMenu ${isMenuOpen ? "open" : ""}`}>
				<button onClick={toggleMenu} className="closeMenu">
					<IoCloseOutline size={30} />
				</button>
				<ul>
					<li className={isActive("/")} onClick={() => handleLinkClick("/")}>
						<RiHomeLine />
					</li>
					<li
						className={isActive("/artworks")}
						onClick={() => handleLinkClick("/artworks")}
					>
						WORKS
					</li>
					<li
						className={isActive("/exhibitions")}
						onClick={() => handleLinkClick("/exhibitions")}
					>
						EXHIBITIONS
					</li>
					<li
						className={isActive("/about")}
						onClick={() => handleLinkClick("/about")}
					>
						ABOUT
					</li>
				</ul>
				<div className="sideActions">
					<button
						className="contact"
						onClick={() => handleLinkClick("/contact")}
					>
						CONTACT
					</button>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
