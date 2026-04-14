const express = require("express");
const mysql = require("mysql2");

const app = express();

const db = mysql.createConnection({
  host:"mysql-2b4773ba-beainfanso22-8777.e.aivencloud.com",
  user:"avnadmin",
  password:"AVNS_na-RrHhLbqy0uotZ-mm",
  database:"defaultdb",
  port:19243,
  });

app.get("/", (req, res) => {
  db.query("SELECT NOW()", (err, result) => {
    if (err) {
      console.error(err);
      return res.send("Database connection failed");
    }
    res.send("Database Connected Successfully: " + result[0]["NOW()"]);
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
