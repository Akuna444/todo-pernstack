const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();

//middleware
app.use(cors());
app.use(express.json());

app.listen(5000, () => {
  console.log("This app started at port 5000");
});

app.post("/todos", async (req, rs) => {
  try {
    console.log(req.body);
  } catch (err) {
    console.log(err);
  }
});
