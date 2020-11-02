//bring in basic modules/packages/middleware
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutss", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

//include routes
require("./routes/api.js")(app);
require("./routes/view.js")(app);
require("./public/api")

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
