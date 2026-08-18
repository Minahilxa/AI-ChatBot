const express = require("express");
const cors = require("cors");
const chatRoutes = require("./routes/chat.routes");
const notFound = require("./middlewares/notFound");
const errorHandler = require("./middlewares/errorHandler");
const { clientUrl } = require("./config/env");

const app = express();

app.use(cors({ origin: clientUrl }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.use("/api", chatRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
