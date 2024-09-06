import React, { useState, useEffect } from "react";
import "./Contact.css";

/**
 * Contact Component
 *
 * This component provides a contact form for users to send messages.
 * The form includes fields for name, email, phone number, subject, and message.
 * A status message is displayed after the form is submitted, indicating whether the submission was successful or if an error occurred.
 * The status message automatically disappears after 5 seconds.
 */
function Contact() {
	// State to manage form data
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		subject: "",
		message: "",
	});

	// State to manage the status message and error flag
	const [statusMessage, setStatusMessage] = useState("");
	const [isError, setIsError] = useState(false);

	/**
	 * handleChange
	 *
	 * This function updates the form data state as the user types into the form fields.
	 *
	 * @param {object} e - The event object
	 */
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	/**
	 * validateEmail
	 *
	 * This function validates the email address format using a regular expression.
	 *
	 * @param {string} email - The email address to validate
	 * @returns {boolean} - True if the email is valid, false otherwise
	 */
	const validateEmail = (email) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	/**
	 * validatePhone
	 *
	 * This function validates the phone number format using a regular expression.
	 * Note: This is a basic validation and might need adjustment for international formats.
	 *
	 * @param {string} phone - The phone number to validate
	 * @returns {boolean} - True if the phone number is valid, false otherwise
	 */
	const validatePhone = (phone) => {
		const phoneRegex = /^[0-9\s-]+$/;
		return phone === "" || phoneRegex.test(phone);
	};

	/**
	 * validateForm
	 *
	 * This function validates the entire form before submission.
	 * It checks the required fields and their formats.
	 *
	 * @returns {boolean} - True if the form is valid, false otherwise
	 */
	const validateForm = () => {
		if (!formData.name.trim()) {
			setStatusMessage("Name is required.");
			setIsError(true);
			return false;
		}

		if (!validateEmail(formData.email)) {
			setStatusMessage("Please enter a valid email address.");
			setIsError(true);
			return false;
		}

		if (!validatePhone(formData.phone)) {
			setStatusMessage("Please enter a valid phone number.");
			setIsError(true);
			return false;
		}

		if (!formData.message.trim()) {
			setStatusMessage("Message is required.");
			setIsError(true);
			return false;
		}

		return true;
	};

	/**
	 * handleSubmit
	 *
	 * This function handles the form submission.
	 * It sends the form data to the backend via a POST request and displays a status message based on the result.
	 *
	 * @param {object} e - The event object
	 */
	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!validateForm()) return;

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				setStatusMessage("Message successfully sent!");
				setIsError(false); // Success - no error
				// Reset the form data
				setFormData({
					name: "",
					email: "",
					phone: "",
					subject: "",
					message: "",
				});
			} else {
				setStatusMessage("Error while sending the message. Please try again!");
				setIsError(true); // An error occurred
			}
		} catch (error) {
			console.error("Error:", error);
			setStatusMessage("An error has occurred.");
			setIsError(true); // An error occurred
		}
	};

	/**
	 * useEffect - Status Message Timeout
	 *
	 * This effect runs whenever the statusMessage state changes.
	 * It sets a timer to automatically clear the status message after 5 seconds.
	 */
	useEffect(() => {
		if (statusMessage) {
			const timer = setTimeout(() => {
				setStatusMessage(""); // Clear the status message after 5 seconds
			}, 5000);

			// Cleanup function to clear the timer when the component unmounts or before the next effect runs
			return () => clearTimeout(timer);
		}
	}, [statusMessage]);

	return (
		<div className="contactMe">
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="name">Name (required)</label>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="email">Email (required)</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="phone">Phone Number (optional)</label>
					<input
						type="text"
						id="phone"
						name="phone"
						value={formData.phone}
						onChange={handleChange}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="subject">Subject (optional)</label>
					<input
						type="text"
						id="subject"
						name="subject"
						value={formData.subject}
						onChange={handleChange}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="message">Message (required)</label>
					<textarea
						id="message"
						name="message"
						value={formData.message}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="submitButton">
					<button type="submit">SEND MESSAGE</button>
				</div>
			</form>
			{/* Status message with dynamic class based on error state */}
			{statusMessage && (
				<p className={`statusMessage ${isError ? "error" : "success"}`}>
					{statusMessage}
				</p>
			)}
		</div>
	);
}

export default Contact;
