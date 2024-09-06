import React from "react";

import "./AboutMe.css";

function AboutMe() {
	return (
		<>
			<div className="aboutPage">
				<div className="about">
					<div className="aboutPicture">
						<img
							src="public\assets\artistPicture.jpeg"
							alt="Picture of the artist Steffen Dietz"
						/>
					</div>
					<div className="aboutText">
						<h2>Steffen Dietz</h2>
						<p>
							Der 1979 im Ruhrgebiet geborene und in Hamburg lebende Künstler
							malt abstrakt mit Acryl, Öl und Leuchtpigmenten auf Leinwand und
							Holz: Vornehmlich großformatig, mit Spachtel, Pinsel und seinen
							Händen. Seine Werke sollen Räume mit Atmosphäre füllen und immer
							auch einen zusätzlichen Raum für den Betrachter schaffen - für ein
							Gefühl oder eine eigene Interpretation. Seine Kompositionen
							entstehen immer intuitiv und ohne jeglicher Regeln. <br /> <br />{" "}
							Aufsehen erregten seine Werke bereits bei der letztjährigen
							Incorporating art fair, der bedeutensten Kunstmesse aus München,
							die seit 2008 zeitgenössische Kunst zeigt und dieses Jahr zum
							dritten Mal in Hamburg stattfand.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default AboutMe;
