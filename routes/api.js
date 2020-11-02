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

    //read list of workouts
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
    });

    //
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

    //create new workout
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

    //update workout
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
