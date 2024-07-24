const { Schema, model } = require("mongoose");

const paintingSchema = new Schema(
	{
		title: { type: String, required: true },
		description: { type: String, required: true },
		image_url: { type: String, required: true },
	},
	{
		timestamps: true,
	}
);

const Painting = model("Painting", paintingSchema);

module.exports = Painting;
