require('dotenv').config();
require('express-async-errors');

const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");

mongoose.connect(`mongodb+srv://dizmay:${process.env.databasePassword}@cluster0.hisxe.mongodb.net/${process.env.databaseName}?retryWrites=true&w=majority`);
mongoose.Promise = global.Promise;

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get("/", (req, res) => {
  res.json({ message: "Hello world!" });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});