const { Schema, model } = require("mongoose");

const paintingSchema = new Schema(
	{
		title: { type: String, required: true },
		year: { type: String, required: true },
		artist: { type: String, required: true },
		dimensions: { type: String, required: true },
		type: { type: String, required: true },
		image_url: { type: String, required: true },
	},
	{
		timestamps: true,
	}
);

const Painting = model("Painting", paintingSchema);

module.exports = Painting;
