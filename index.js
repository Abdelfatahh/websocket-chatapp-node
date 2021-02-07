let express = require("express");
let socket = require("socket.io");

// setup the app

const app = express();

const server = app.listen(4000, () => {
  console.log("listening on port 4000..");
});

// static files
app.use(express.static("public"));

// setup the socket
let io = socket(server);

io.on("connection", (socket) => {
  console.log("made socket connection", socket.id);
});
