const mongoose = require("mongoose");

const exhibitionSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	startDate: {
		type: Date,
		required: true,
	},
	endDate: {
		type: Date,
		required: true,
	},
	streetAndNumber: {
		type: String,
		required: true,
	},
	code: {
		type: String,
		required: true,
	},
	City: {
		type: String,
		required: true,
	},
	eventUrl: {
		type: String,
		required: true,
	},
	googleMapsUrl: {
		type: String,
		required: true,
	},
});

const Exhibition = mongoose.model("Exhibition", exhibitionSchema);

module.exports = Exhibition;
