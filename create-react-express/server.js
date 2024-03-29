const express = require("express");
const path = require("path");
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;
const routes = require('./routes');
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("/client/build"));
} else {
  app.use(express.static("/client/public"));
}


// Define API routes here
app.use(routes);

//Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {useNewUrlParser: true});


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
