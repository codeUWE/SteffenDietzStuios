require("dotenv/config");
require("./db");

const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

// Import Routers
const paintingsRouter = require("./routes/paintings");
const exhibitionRouter = require("./routes/exhibitions");
const contactRouter = require("./routes/contact");

// Middlewares
app.use(express.json());
app.use(cors());

// Routers
app.use("/api/paintings", paintingsRouter);
app.use("/api/exhibitions", exhibitionRouter);
app.use("/api/contact", contactRouter);

// Start the server
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
