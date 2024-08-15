import "./NavbarBottom.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

// Icons
import {
	PiInstagramLogoThin,
	PiCalendarDotsThin,
	PiFacebookLogoThin,
} from "react-icons/pi";
import { CiMail } from "react-icons/ci";

function NavbarBottom() {
	const navigate = useNavigate();
	const location = useLocation();
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		/**
		 * lastScrollTop is used to keep track of the last known scroll position.
		 * This helps in determining whether the user is scrolling up or down.
		 */
		let lastScrollTop = 0;

		/**
		 * handleScroll is a function that determines if the user is scrolling up or down.
		 * If scrolling down, it hides the Navbar by setting isVisible to false.
		 * If scrolling up, it shows the Navbar by setting isVisible to true.
		 */
		const handleScroll = () => {
			// Get the current scroll position
			const scrollTop = window.scrollY || document.documentElement.scrollTop;

			if (scrollTop > lastScrollTop) {
				// User is scrolling down
				setIsVisible(false);
			} else {
				// User is scrolling up
				setIsVisible(true);
			}

			// Update lastScrollTop to the current scroll position, with a floor of 0
			lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
		};

		/**
		 * Add the scroll event listener if the current path is '/artworks', '/about', or '/exhibitions'.
		 * This ensures the handleScroll function is active on the desired pages.
		 */
		if (
			location.pathname === "/artworks" ||
			location.pathname === "/about" ||
			location.pathname === "/exhibitions"
		) {
			window.addEventListener("scroll", handleScroll);
		}

		/**
		 * Cleanup function that removes the scroll event listener when the component is unmounted
		 * or when the dependencies change (i.e., when the location.pathname changes).
		 * This prevents memory leaks and ensures that the event listener is not duplicated.
		 */
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [location.pathname]);

	return (
		<div
			className={`bottomNav ${isVisible ? "show" : "hide"}`}
			style={{
				position:
					location.pathname === "/artworks" ||
					location.pathname === "/about" ||
					location.pathname === "/exhibitions"
						? "fixed"
						: "relative",
				bottom: 0,
			}}
		>
			<button>
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
			</button>
			<button>
				<PiFacebookLogoThin size={30} onClick={() => navigate("/facebook")} />
			</button>
			<button>
				<PiCalendarDotsThin
					size={30}
					onClick={() => navigate("/exhibitions")}
				/>
			</button>
			<button>
				<CiMail size={30} onClick={() => navigate("/contact")} />
			</button>
		</div>
	);
}

export default NavbarBottom;
