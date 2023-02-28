const express = require("express");
const routing = express.Router();
const movie = require("../service/details");

//---------------------------------------------------------------------------------------

//retreive all movies
routing.get("/getMovies", (req, res) => {
  result = movie.retrieveMovies();
  res.json(result);
});

//retrieve particular movie
routing.get("/getMovies/:moviename", (req, res) => {
  mname = req.params.moviename;
  console.log(mname);
  result = movie.retrieveMovieDetail(mname);
  if (result) res.json(result);
  else res.json("No details found!!");
});

//post method
routing.post("/Movie", (req, res) => {
  var MOVIE = JSON.stringify(req.body);
  result = movie.addMovieDetail(MOVIE);
  if (result) res.json("successfully added the movie");
  else res.json("Error!!");
});

//Delete
//moviename - to be deleted
routing.delete("/Movie/:moviename", (req, res) => {
  moviename = req.params.moviename;
  result = movie.deleteMovieDetail(moviename);
  if (result) res.json("successfully deleted the movie");
  else res.json("Error!!");
});

//moviename to be updated , movie - key,value pair to be updated.
routing.put("/Movie/:moviename/:key/:value", (req, res) => {
  moviename = req.params.moviename;
  key = req.params.key;
  value = req.params.value;
  result = movie.updateMovieDetails(moviename, key, value);
  if (result) res.json("successfully updated the movie");
  else res.json("Error!!");
});

module.exports = routing;
