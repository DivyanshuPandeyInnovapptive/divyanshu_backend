const fs = require("fs");

fs.readFile("index.js", "utf-8", (err, data) => {
  let lines = data.split("\n");
  let words = data.split(" ");
  console.log("Lines: ", lines.length);
  console.log("Characters: ", data.length);
  console.log("Words: ", words.length);
});

fs.stat("./", (err, stats) => {
  if (err) return console.error(err);
  if (stats.isDirectory()) {
    fs.readdir("./", (err, files) => {
      if (err) return console.log(err);
      files.forEach((file) => {
        console.log(file);
      });
    });
  }
});
