const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
const mongoose = require("mongoose");
const app = require("./app");

mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connection established");
  });

let port = process.env.PORT || 8080;
app.listen(port, (req, res) => {
  console.log("listening on port " + port);
});
