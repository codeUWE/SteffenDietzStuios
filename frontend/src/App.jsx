import React, { useState, useEffect } from "react";

import "./App.css";
import { Routes, Route } from "react-router-dom";

//components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Homepage/Homepage";
import AboutMe from "./components/AboutMe/AboutMe";
import Artworks from "./components/Artworks/Artworks";
import Contact from "./components/Contact/Contact";
import Exhibitions from "./components/Exhibitions/Exhibitions";
import LegalNotice from "./components/LegalNotice/LegalNotice";
import NavbarBottom from "./components/NavbarBottom/NavbarBottom";

function App() {
	return (
		<>
			<Navbar />
			<main>
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/artworks" element={<Artworks />} />
					<Route path="/exhibitions" element={<Exhibitions />} />
					<Route path="/about" element={<AboutMe />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/legal-notice" element={<LegalNotice />} />
				</Routes>
			</main>
			<footer>
				<NavbarBottom />
				<Footer />
			</footer>
		</>
	);
}

export default App;
