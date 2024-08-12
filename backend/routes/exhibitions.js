const express = require("express");

const {
	getExhibitions,
	getExhibition,
	createExhibition,
	updateExhibition,
	deleteExhibition,
} = require("../controllers/exhibitions");

const exhibitionRouter = express.Router();

exhibitionRouter.route("/").get(getExhibitions).post(createExhibition);
exhibitionRouter
	.route("/:id")
	.get(getExhibition)
	.put(updateExhibition)
	.delete(deleteExhibition);

module.exports = exhibitionRouter;
