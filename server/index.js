const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const massive = require("massive");
require(`dotenv`).config();

const restCtrl = require("./controller");

const port = 3001;
const app = express();

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`I am listening on port ${port}`);
});
