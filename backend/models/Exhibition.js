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
	address: {
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
	description: {
		type: String,
		required: true,
	},
	photos: [{ type: String }],
});

const Exhibition = mongoose.model("Exhibition", exhibitionSchema);

module.exports = Exhibition;
