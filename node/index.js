const http = require("http");
const dt = require("./custom");
const fs = require("fs");

http
  .createServer(async (req, res) => {
    // res.write("Hello, world!\n");
    // res.write("Time: " + dt.myDateTime());
    await fs.readFile("input.txt", "utf-8", (err, data) => {
      if (err) return console.error(err);
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.write(data);
      res.end();
    });
  })
  .listen(8081);
console.log("Server listening on port 8081");
