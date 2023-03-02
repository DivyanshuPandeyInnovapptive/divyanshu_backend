const express = require("express");
const bodyParser = require("body-parser");
const bookRouter = require("./routes/BookRoutes");
const cors = require("cors");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:4200" }));

app.use("/api/books", bookRouter);

module.exports = app;
