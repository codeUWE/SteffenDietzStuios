const Painting = require("../models/Painting");

const getPaintings = async (req, res) => {
	try {
		const paintings = await Painting.find({}).sort({ createdAt: -1 });
		res.json(paintings);
	} catch (error) {
		console.log(error);
		res.status(500).send("Something went wrong!");
	}
};

const getPainting = async (req, res) => {
	try {
		const {
			params: { id },
		} = req;
		const painting = await Painting.findById(id);
		res.json(painting);
	} catch (error) {
		console.log(error);
		res.status(500).send("Something went wrong!");
	}
};

const createPainting = async (req, res) => {
	try {
		const {
			body: { title, year, artist, dimensions, type, image_url },
		} = req;
		const newPainting = await Painting.create({
			title,
			year,
			artist,
			dimensions,
			type,
			image_url,
		});
		res.status(201).json(newPainting);
	} catch (error) {
		console.log(error);
		res.status(500).send("Something went wrong!");
	}
};

const updatePainting = async (req, res) => {
	try {
		const {
			body,
			params: { id },
		} = req;
		const updatedPainting = await Painting.findByIdAndUpdate(id, body, {
			new: true,
		});
		res.status(201).json(updatedPainting);
	} catch (error) {
		console.log(error);
		res.status(500).send("Something went wrong!");
	}
};

const deletePainting = async (req, res) => {
	try {
		const {
			params: { id },
		} = req;
		const deletedPainting = await Painting.findByIdAndDelete(id);
		res.json(deletedPainting);
	} catch (error) {
		console.log(error);
		res.status(500).send("Something went wrong!");
	}
};

module.exports = {
	getPaintings,
	getPainting,
	createPainting,
	updatePainting,
	deletePainting,
};
