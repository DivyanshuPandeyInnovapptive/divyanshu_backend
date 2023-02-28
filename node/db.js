const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017/test";

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

// const mysql = require("mysql2");

// const conn = mysql.createConnection({
//   host: "localhost",
//   user: "admin",
//   password: "password",
// });

// conn.connect((err) => {
//   if (err) throw err;
//   console.log("Connected");
// });
