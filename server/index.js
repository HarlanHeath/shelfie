const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
require(`dotenv`).config();
const controller = require("./controller");

// APP Build Folder serve all files
// console.log(__dirname + "/../build");
// app.use(express.static(__dirname + "/../build"));

const port = 3001;
const app = express();

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);
});

app.get(`/api/inventory`, controller.showAll);
app.delete(`/api/delete/:id`, controller.delete);

// Build the APP for production catch all errors during build
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../build/index.html"));
// });

app.listen(port, () => {
  console.log(`I am listening on port ${port}`);
});
