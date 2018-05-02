const http = require("http");
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI, { autoReconnect: true });
mongoose.connection
  .on("error", () => console.log("Error: Database connection failed"))
  .once("open", () => console.log("Success: Database connection successful"));

require("./models");
require("./routes")(app);

const PORT = process.env.PORT || 4000;
http
  .createServer(app)
  .listen(PORT)
  .on("listening", () => console.log(`Listening on PORT ${PORT}`));
