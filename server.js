const express = require("express");
const path = require("path");

const app = express();
const port = 3030;

app.use(express.static(__dirname));

console.log(__dirname);
app.get("/", (req, res) => {
  console.log(__dirname);
  console.log("LOADING");
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
