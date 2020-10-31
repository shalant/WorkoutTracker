// /api/blah

const { db } = require("../models/workout")
//const Whatever = require('./Whatever')

// api/stats, api/exercise?, api/exercise


//db.workout.create

app.post('/api/endpoint', (req, res) =>{
    const data = req.body
    db.Whatever.create(data, function(err, whatever))

})