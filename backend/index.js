require("dotenv/config");
require("./db");

const express = require("express");
const cors = require("cors");
const path = require("path"); // Zum Umgang mit Pfaden

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

// Serve static files from the "dist" folder (Vite build)
app.use(express.static(path.join(__dirname, "dist")));

// Catch-all route for React frontend
// This ensures that when someone accesses a route not handled by the API, it serves the React app
app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Start the server
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
