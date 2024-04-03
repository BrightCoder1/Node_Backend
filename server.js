const express = require("express");
const app = express();
// Import our database connection file
const connectDB = require("./db");
// import body-persor
const bodyParser = require("body-parser");

const router = require("./routers/router");
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("HOME Page");
});

app.use(router);

connectDB().then(() => {
  app.listen(3000, () => {
    console.log("DONE http://localhost:3000");
  });
});
