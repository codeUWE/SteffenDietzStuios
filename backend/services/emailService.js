const nodemailer = require("nodemailer");
require("dotenv").config();

// Create the Nodemailer transporter using STRATO's SMTP settings
const transporter = nodemailer.createTransport({
	host: "smtp.strato.de", // STRATO SMTP server
	port: 465, // Use 465 for SSL or 587 for TLS
	secure: true, // true for SSL (port 465), false for TLS (port 587)
	auth: {
		user: process.env.STRATO_EMAIL, // STRATO email address of the artist
		pass: process.env.STRATO_PASSWORD, // Password for the STRATO email
	},
});

/**
 * sendMailToArtist
 *
 * This function sends an email to the artist using the STRATO email address.
 *
 * @param {string} name - Name of the person submitting the form
 * @param {string} email - Email address of the person submitting the form
 * @param {string} phone - Phone number of the person (optional)
 * @param {string} subject - Subject of the message (optional)
 * @param {string} message - Content of the message
 */

const sendMailToArtist = async (name, email, phone, subject, message) => {
	const mailOptions = {
		from: process.env.STRATO_EMAIL, // STRATO email as the sender
		to: process.env.STRATO_EMAIL, // STRATO email as the recipient (artist's inbox)
		subject: `New message from ${name}: ${subject || "No subject"}`, // Email subject
		html: `
		<!DOCTYPE html>
		<html lang="en">
		<head>
		  <meta charset="UTF-8" />
		  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
		  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
		  <style>
			body {
			  font-family: Arial, sans-serif;
			  background-color: #f4f4f4;
			  margin: 0;
			  padding: 0;
			  -webkit-text-size-adjust: none; /* Prevent font scaling in iOS */
			}
			.email-container {
			  width: 90%;
			  background-color: #f4f4f4;
			  padding: 40px 0; /* More padding for better spacing */
			}
			.email-body {
			  max-width: 600px;
			  margin: 0 auto;
			  background-color: #ffffff;
			  padding: 40px 30px; /* Added more padding inside the email */
			  border-radius: 8px;
			  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
			  text-align: left; /* Align content to the left */
			}
			.email-footer {
			  text-align: center;
			  padding-top: 20px;
			  font-size: 12px;
			  color: #888888;
			}
			img {
			  display: block;
			  max-width: 100%;
			  height: auto;
			  margin: 0 auto;
			}
			.info-section {
			  margin-bottom: 20px; /* Add space between sections */
			}
			h2 {
			  color: #4a90e2;
			  margin-bottom: 20px;
			}
			p {
			  margin: 5px 0;
			}
			/* Ensure better padding on mobile */
			@media only screen and (max-width: 600px) {
			  .email-body {
				padding: 30px 15px; /* Increase padding on mobile devices */
			  }
			}
		  </style>
		</head>
		<body>
		  <div class="email-container">
			<table class="email-body" width="100%" cellpadding="0" cellspacing="0">
			  <tr>
				<td style="text-align: center; padding-bottom: 20px;">
				  <!-- Use a table to control the width of the logo -->
				  <table width="150" cellpadding="0" cellspacing="0">
					<tr>
					  <td>
						<img src="https://res.cloudinary.com/da6xbhzea/image/upload/v1725620595/SteffenDietzLogo_rjh4yk.png" alt="Logo" width="150" style="display: block; width: 150px; height: auto; margin: 0 auto;" />
					  </td>
					</tr>
				  </table>
				</td>
			  </tr>
			  <tr>
				<td class="info-section">
				  <h2>New Message from ${name}</h2>
				  <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
				  <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
				  <p><strong>Subject:</strong> ${subject || "No subject"}</p>
				</td>
			  </tr>
			  <tr>
				<td class="info-section">
				  <p><strong>Message:</strong></p>
				  <blockquote style="background-color: #f9f9f9; padding: 10px; border-left: 5px solid #4a90e2;">
					${message}
				  </blockquote>
				</td>
			  </tr>
			  <tr>
				<td class="email-footer">
				  <p>This message was sent from your website contact form.</p>
				</td>
			  </tr>
			</table>
		  </div>
		</body>
		</html>
	  `,
	};

	try {
		await transporter.sendMail(mailOptions); // Send the email using Nodemailer
	} catch (error) {
		console.error("Error sending email to artist:", error); // Log the error if email fails
		throw error; // Rethrow the error for the calling function to handle
	}
};

/**
 * sendConfirmationEmail
 *
 * This function sends a confirmation email to the user who submitted the form.
 *
 * @param {string} userEmail - Email address of the person submitting the form
 * @param {string} userName - Name of the person submitting the form
 * @param {string} message - Content of the message
 */

const sendConfirmationEmail = async (userEmail, userName, message) => {
	const mailOptions = {
		from: process.env.STRATO_EMAIL, // STRATO email as the sender
		to: userEmail, // User's email address as the recipient
		subject: "Confirmation: Your message to Steffen Dietz", // Email subject for confirmation
		html: `
		<!DOCTYPE html>
		<html lang="en">
		<head>
		  <meta charset="UTF-8" />
		  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
		  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
		  <style>
			body {
			  font-family: Arial, sans-serif;
			  background-color: #ffffff;
			  margin: 0;
			  padding: 0;
			  -webkit-text-size-adjust: none; /* Prevent font scaling in iOS */
			}
			.email-container {
			  width: 90%;
			  background-color: #f4f4f4;
			  padding: 20px;
			}
			.email-body {
			  max-width: 600px;
			  margin: 0 auto;
			  background-color: #ffffff;
			  padding: 20px;
			  border-radius: 8px;
			  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
			}
			.email-footer {
			  text-align: center;
			  padding-top: 20px;
			  font-size: 12px;
			  color: #888888;
			}
			img {
			  display: block;
			  margin: 0 auto; /* Ensures the logo is centered */
			  max-width: 100%;
			  height: auto;
			}
  
			/* Extra padding for mobile devices */
			@media only screen and (max-width: 600px) {
			  .email-body {
				padding: 40px 20px; /* Increased padding for mobile */
			  }
			}
		  </style>
		</head>
		<body>
		  <div class="email-container">
			<table class="email-body" width="100%" cellpadding="0" cellspacing="0">
			  <tr>
				<td style="text-align: center; padding-bottom: 20px;">
				  <!-- Logo in the center with padding -->
				  <table width="150" cellpadding="0" cellspacing="0" align="center">
					<tr>
					  <td>
						<img src="https://res.cloudinary.com/da6xbhzea/image/upload/v1725620595/SteffenDietzLogo_rjh4yk.png" alt="Logo" width="150" style="display: block; width: 150px; height: auto;" />
					  </td>
					</tr>
				  </table>
				</td>
			  </tr>
			  <tr>
				<td style="color: #333333; line-height: 1.6;">
				  <h2 style="color: #211f1f;">Hello, ${userName}</h2>
				  <p>Thank you for reaching out! I will get back to you as soon as possible.</p>
				  <p>Here is a copy of your message:</p>
				  <blockquote style="background-color: #f9f9f9; padding: 10px; border-left: 5px solid #4a90e2;">
					${message}
				  </blockquote>
				  <p>Best regards,</p>
				  <p>Steffen Dietz</p>
				</td>
			  </tr>
			  <tr>
				<td class="email-footer">
				  <p>This is an automatic confirmation of your message sent to Steffen Dietz.</p>
				</td>
			  </tr>
			</table>
		  </div>
		</body>
		</html>
	  `,
	};

	try {
		await transporter.sendMail(mailOptions); // Send the confirmation email using Nodemailer
	} catch (error) {
		console.error("Error sending confirmation email:", error); // Log the error if email fails
		throw error; // Rethrow the error for the calling function to handle
	}
};

module.exports = {
	sendMailToArtist,
	sendConfirmationEmail, // Export both functions so they can be used in other parts of the project
};
