const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const app = express();
const port = 8000;

app.use(expressLayouts);
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// app.set("/", (req, res) => {});
app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return false;
  }
  console.log(`server is start on port :- ${port}`);
});
