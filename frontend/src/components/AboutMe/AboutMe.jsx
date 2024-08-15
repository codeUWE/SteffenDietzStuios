import "./AboutMe.css";
import NavbarBottom from "../NavbarBottom/NavbarBottom";

//assets
import artistPicture from "../../assets/artistPicture.jpeg";

function AboutMe() {
	return (
		<>
			<div className="aboutPage">
				<div className="about">
					<div className="aboutPicture">
						<img
							src={artistPicture}
							alt="Picture of the artist Steffen Dietz"
						/>
					</div>
					<div className="aboutText">
						<h2>Hello there!</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
							consequatur amet voluptates, fugit placeat, suscipit vel, saepe
							eius reprehenderit eos ducimus porro ullam hic! Quos mollitia
							magnam corporis temporibus natus perferendis blanditiis obcaecati
							odio, saepe nobis, modi maiores dolorem quis impedit numquam animi
							asperiores qui expedita adipisci in quisquam. Cumque, architecto
							placeat unde esse numquam ipsum quisquam excepturi, temporibus
							veritatis dolores ipsa magni, sed est voluptatibus molestias
							quidem. Voluptas, at!
						</p>
					</div>
				</div>
				<NavbarBottom />
			</div>
		</>
	);
}

export default AboutMe;
