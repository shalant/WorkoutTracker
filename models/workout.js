//create an db.Workout
//workout=library
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [
        {
            type: {
                type: String
            },
            name: {
                type: String,
                trim: true,
                required: "Enter name of exercise"
            },
            duration: {
                type: Number,
                required: "Enter the duration in minutes"
            },
            weight: {
                type: Number,
                required: "Weight required"
            },
            reps: {
                type: Number,
                required: "Reps are required"
            },
            sets: {
                type: Number,
                required: "Sets are required"
            },
            distance: {
                type: Number,
                required: "Distance is required"
            }
        }
    ]
},
{
    toJSON: {
        virtuals: true
    }
}

);

WorkoutSchema.virtual("totalDuration").get(function() {
    const total = 0;

    for (const i = 0; i < this.exercises.length; i++) {
        total += this.exercises[i].duration;
    }
    return total;
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
