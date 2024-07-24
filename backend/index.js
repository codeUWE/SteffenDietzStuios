require("dotenv/config");
require("./db");

const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

//import Routers
const paintingsRouter = require("./routes/paintings");
const exhibitionRouter = require("./routes/exhibitions");

//middlewares
app.use(express.json());

//routers
app.use("/api/paintings", paintingsRouter);
app.use("/api/exhibitions", exhibitionRouter);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
