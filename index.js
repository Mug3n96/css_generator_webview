const path = require("path");
const express = require("express");
const app = express();

// .env load
require("dotenv").config();
const { PORT } = process.env;

// serve static files
app.use("/static", express.static(path.resolve(__dirname, "public", "static")));

// server index file to every path
app.get("/design", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "design.html"));
});

app.get("/designs", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "designs.html"));
});

app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
