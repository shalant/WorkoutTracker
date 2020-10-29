const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populatedb", { useNewUrlParser: true });

// add exercises to a previous workout plan

app.post("/exercise", (req, res) => {
 //use the req off the body to create post
    db.Exercise.
})
    


// add new exercises to a new workout plan



// view combined weight of multiple exerciseson the stats page
