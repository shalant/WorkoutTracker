const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
//require("dotenv").config();
const PORT = process.env.PORT || 3000;

//const db = require("./models");

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});


require("./routes/api.js")(app);
require("./routes/view.js")(app);
require("./public/api")


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });



// db.Workout.create({ name: "Workouts" })
//   .then(dbWorkout => {
//     console.log(dbWorkout);
//   })
//   .catch(({message}) => {
//     console.log(message);
//   });

// app.post("/submit", ({body}, res) => {
//   db.Exercise.create(body)
//     .then(({_id}) => db.Workout.findOneAndUpdate({}, { $push: { Exercises: _id } }, { new: true }))
//     .then(dbWorkout => {
//       res.json(dbWorkout);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// app.get("/exercise", (req, res) => {
//   db.Exercise.find({})
//     .then(dbExercise => {
//       res.json(dbExercise);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// app.get("/exercise", (req, res) => {
//   db.Workout.find({})
//     .then(dbWorkout => {
//       res.json(dbWorkout);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });


// // add exercises to a previous workout plan

// // app.post("/exercise", (req, res) => {
// //  //use the req off the body to create post
// //     db.Exercise.
// // })
    


// // add new exercises to a new workout plan



// // view combined weight of multiple exerciseson the stats page

