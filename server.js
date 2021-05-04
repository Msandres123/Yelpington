const express = require("express");
const { getPriority } = require("os");
const path = require("path");

const app = express();

const port = process.env.PORT || 5000;

//allows only folders in the client folder to be viewed
app.use(express.static("./client/build"));

//Sets up route to get all restaurants by given id
app.get("/api", (req, res) => {
  res.sendFile(path.resolve("./client/api/restaurants.json"));
});

//Sets up route to get restaurant info based upon given restaurant id
app.get("/api/:id", (req, res) => {
  res.sendFile(path.resolve(`./client/api/${req.params.id}.json`));
});

//wild card catch all, not really doing anything atm may set up 404 page later idk
app.get("*", (req, res) => {
  res.sendFile(path.resolve("./client/build/index.html"));
});

//Displays a message in the terminal informing host which port back end is running on
app.listen(port, () => {
  console.log("listening on port", port);
});
