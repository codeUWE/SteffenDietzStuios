const express = require("express");
const { handleContactFormSubmission } = require("../controllers/contact");

const contactRouter = express.Router();

contactRouter.post("/", handleContactFormSubmission);

module.exports = contactRouter;
