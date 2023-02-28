const express = require("express");
const app = express();

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

// app.get("/process_get", (req, res) => {
//   response = {
//     name: req.query.name,
//     password: req.query.password,
//   };
//   console.log(response);
//   if (
//     req.query.name === "innovapptive" &&
//     req.query.password === "innovapptive"
//   )
//     res.end("Valid User");
//   else res.end("Invalid User");
// });

// let port = 5000;
// app.listen(port, (req, res) => {
//   console.log("listening on port: ", port);
// });

var bodyParser = require("body-parser");
// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});
app.post("/process_post", urlencodedParser, function (req, res) {
  // Prepare output in JSON format
  response = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
  };
  console.log(response);
  res.end(JSON.stringify(response));
});
var server = app.listen(8000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
