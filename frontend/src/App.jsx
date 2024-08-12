import "./App.css";
import { Routes, Route } from "react-router-dom";

//components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<>
			<Navbar />
			{/* SPA routes in main */}
			<main></main>
			<Footer />
		</>
	);
}

export default App;
