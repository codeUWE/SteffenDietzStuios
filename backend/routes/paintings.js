const express = require("express");

const {
	getPaintings,
	getPainting,
	createPainting,
	updatePainting,
	deletePainting,
} = require("../controllers/paintings");

const paintingsRouter = express.Router();

paintingsRouter.route("/").get(getPaintings).post(createPainting);
paintingsRouter
	.route("/:id")
	.get(getPainting)
	.put(updatePainting)
	.delete(deletePainting);

module.exports = paintingsRouter;
