const db = require("../models")
const mongojs = require("mongojs");

module.exports = function(app) {
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
    });

    app.get("/api/workout/:id", (req, res) => {
        db.Workout.find(
            {
                _id: mongojs.ObjectId(req.params.id)
            },
        )
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
    });

    app.post("/api/workouts", (req, res) => {
        db.Workout.create({
        day: Date.now()
    })
        .then(data => {
            res.json(data);
            console.log(data)
        })
        .catch(err => {
            res.json(err);
        });
    });

    app.put("/api/workouts/:id", (req,res) => {
        console.log(req)
        db.Workout.update(
            {
                _id: mongojs.ObjectId(req.params.id)
            },
            {$push: {
                exercises: req.body
            }
        },
        (error, data) => {
            if (error) {
                res.send(error);
            } else {
                res.send(data);
            }
        })
    });

}



// //------------------------

// const router = require("express").Router();
// const Workout = require("../models/workout");

// // add field for total duration and send to index.html to display most recent
// router.get("/api/workouts", (req, res) => {
//     Workout.aggregate([{
//         $addFields: {
//             totalDuration: { $sum: "$exercises.duration"}
//         }
//     }]).then(dbWorkouts => {
//         res.json(dbWorkouts);
//     }).catch(err => {
//         res.status(400).json(err);
//     });
// });

// // create new workout
// router.post("/api/workouts", ({body}, res) => {
//     Workout.create(body).then(dbWorkout => {
//         res.json(dbWorkout);
//     })
//     .catch(err => {
//         res.status(400).json(err);
//     })
// });

// //add exercises to a workout
// router.put("/api/workouts/:id", (req, res) => {
//     let id = req.params.id;
//     Workout.findOneAndUpdate(
//         { _id: id },
//         { $push:
//             {exercises: req.body}
//         },
//         { new: false }
//     ).then(updated => {
//         res.json(updated);
//     }).catch(err => {
//         res.status(400).json(err);
//     });
// });
   
// //sends data to stat.html
// router.get("api/workouts/range", (req, res) => {
//     Workout.find({})
//     .then(dbRange => {
//         res.json(dbRange);
//     })
//     .catch(err => {
//         res.status(400).json(err);
//         console.log("Could not find range");
//     });
// });


// //--------------------------

// // // /api/blah

// // const { db } = require("../models/workout")
// // //const Whatever = require('./Whatever')

// // // api/stats, api/exercise?, api/exercise


// // //db.workout.create

// // app.post('/api/endpoint', (req, res) =>{
// //     const data = req.body
// //     db.Whatever.create(data, function(err, whatever))

// // })