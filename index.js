require("dotenv").config();
const express = require("express");

console.log(process.env.PORT);

const app = express();
/*  */
app.get("/", (req, res) => {
  res.send("Hello World Home");
});

app.get("/about", (req, res) => {
  res.send("Hello About");
});

app.get("/html", (req, res) => {
  res.send("<h1>This is html tag heading</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Your server is up and running on port ${process.env.PORT}`);
});
