let express = require("express");

// setup the app

const app = express();

const server = app.listen(4000, () => {
  console.log("listening on port 4000..");
});

// static files
app.use(express.static("public"));
