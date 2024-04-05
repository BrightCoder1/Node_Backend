require("dotenv").config();

const express = require("express");
const app = express();
// Import our database connection file
const connectDB = require("./db");
// import body-persor
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;

const router = require("./routers/router");
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("HOME Page");
});

app.use(router);
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("DONE http://localhost:3000");
  });
});