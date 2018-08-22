const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
require(`dotenv`).config();
const controller = require("./controller");

const port = 3001;
const app = express();

console.log(__dirname + "/../build");
app.use(express.static(__dirname + "/../build"));
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);
});

app.get(`/api/inventory`, controller.showAll);
app.delete(`/api/delete/:prod_id`, controller.delete);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(port, () => {
  console.log(`I am listening on port ${port}`);
});
