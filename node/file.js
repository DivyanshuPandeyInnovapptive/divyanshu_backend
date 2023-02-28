const fs = require("fs");

// const input = fs.readFileSync("input.txt", "utf-8");
// console.log(input);
// console.log("Work");

// fs.readFile("input.txt", "utf-8", (err, input) => {
//   console.log(input);
// });
// fs.stat("input.txt", (err, stats) => {
//   if (err) return console.error(err);
//   console.log(stats);
//   console.log("isFile ? " + stats.isFile());
//   console.log("isDirectory ? " + stats.isDirectory());
// });
// console.log("Work");

// fs.appendFile("input.txt", " Appending file", (err) => {
//   if (err) return console.error(err);
//   console.log("Appending file");
// });

// fs.unlink("delete.txt", (err) => {
//   if (err) return console.error(err);
//   console.log("Deleting file");
// });

// let data = "";
// const readerStream = fs.createReadStream("index.js");
// readerStream.setEncoding("utf8");

// readerStream.on("data", (chunk) => {
//   data += chunk.toString();
// });

// readerStream.on("end", () => {
//   console.log(data);
// });

// readerStream.on("error", () => {
//   console.log(err.stack);
// });

// console.log("Program finished");

let data = "A solution of all technology";
const writerStream = fs.createWriteStream("output.txt");
writerStream.write(data, "utf-8");
writerStream.end();
writerStream.
