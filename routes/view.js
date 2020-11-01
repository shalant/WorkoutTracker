// routes to build: stats, exercise?, exercise

// front-end routes

const path = require("path");

module.exports = function(app) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

//show exercise html page
    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

//show stats html page
    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });

};


// module.exports = function(app) {

//     app.get("/", function(req,res) {
//         res.sendFile(path.join(__dirname, "../public/index.html"));
//     });

//     app.get("/exercise", function(req, res) {
//         res.sendFile(path.join(__dirname, "../public/exercise.html"));
//     });

// };