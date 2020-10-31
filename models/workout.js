//create an db.Workout

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Number
  },
  exercises: {
    type: Array,
   
    },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
