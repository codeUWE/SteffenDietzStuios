const Exhibition = require("../models/Exhibition");
const { convertToDate } = require("../utils/dateUtils");

const getExhibitions = async (req, res) => {
	try {
		// Ausstellungen nach Startdatum sortieren (neuestes zuerst)
		const exhibitions = await Exhibition.find({}).sort({ startDate: -1 });
		res.json(exhibitions);
	} catch (error) {
		console.error(error);
		res.status(500).json("Something went wrong");
	}
};

const getExhibition = async (req, res) => {
	try {
		const { id } = req.params;
		const exhibition = await Exhibition.findById(id);
		res.json(exhibition);
	} catch (error) {
		console.error(error);
		res.status(500).json("Something went wrong");
	}
};

const createExhibition = async (req, res) => {
	try {
		const {
			title,
			startDate,
			endDate,
			streetAndNumber,
			code,
			city,
			eventUrl,
			googleMapsUrl,
		} = req.body;

		// Datum konvertieren
		const formattedStartDate = convertToDate(startDate);
		const formattedEndDate = convertToDate(endDate);

		const newExhibition = await Exhibition.create({
			title,
			startDate: formattedStartDate,
			endDate: formattedEndDate,
			streetAndNumber,
			code,
			city,
			eventUrl,
			googleMapsUrl,
		});

		res.status(201).json(newExhibition);
	} catch (error) {
		console.error(error);
		res.status(500).json("Something went wrong");
	}
};

const updateExhibition = async (req, res) => {
	try {
		const { id } = req.params;
		const updatedExhibition = await Exhibition.findByIdAndUpdate(id, req.body, {
			new: true,
		});
		res.json(updatedExhibition);
	} catch (error) {
		console.error(error);
		res.status(500).json("Something went wrong");
	}
};

const deleteExhibition = async (req, res) => {
	try {
		const { id } = req.params;
		const deletedExhibition = await Exhibition.findByIdAndDelete(id);
		res.json(deletedExhibition);
	} catch (error) {
		console.error(error);
		res.status(500).json("Something went wrong");
	}
};

module.exports = {
	getExhibitions,
	getExhibition,
	createExhibition,
	updateExhibition,
	deleteExhibition,
};
