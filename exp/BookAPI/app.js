const express = require("express");
const bodyParser = require("body-parser");
const bookRouter = require("./routes/BookRoutes");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/books", bookRouter);

module.exports = app;
