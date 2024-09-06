const {
	sendMailToArtist,
	sendConfirmationEmail,
} = require("../services/emailService");

const handleContactFormSubmission = async (req, res) => {
	const { name, email, phone, subject, message } = req.body;

	try {
		// E-Mail an den Künstler senden
		await sendMailToArtist(name, email, phone, subject, message);

		// Bestätigungs-E-Mail an den Absender senden
		await sendConfirmationEmail(email, name, message);

		res.status(200).json({ message: "Nachricht erfolgreich gesendet!" });
	} catch (error) {
		res.status(500).json({ message: "Fehler beim Senden der Nachricht." });
	}
};

module.exports = {
	handleContactFormSubmission,
};
