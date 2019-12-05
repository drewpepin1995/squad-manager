const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const knex = require('../db/knex.js');
const auth = require('../auth/index');



let db = require('./database');

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/teams', require('../db/team'));
app.use('/users', require("../db/user"));

app.use('/auth', auth);


app.listen(PORT, () => {
    console.log("Server listening on port " + PORT);
});

db.query("SELECT NOW()", (err, res) => {
    if (err.error)
        return console.log(err.error);
    console.log("PostgresSQL connected: " + res[0].now);
});

app.use(function(err, req, res, next) {

    res.status(err.status || 500);

    res.json({
        message: err.message,
        error: req.app.get('env') === 'developmont' ? err : {}
    });

})
module.exports = app;