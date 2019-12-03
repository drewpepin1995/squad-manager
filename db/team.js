const knex = require('./knex.js');
const express = require('express');
let router = express.Router();

router.get('/', function (req, res) {
    knex.select().from('team').then(function (team) {
        res.send(team)
    })
})

router.post('/add', function (req, res) {
    knex('team').insert({
        manager_id: 1,
        name: 'test 2'
    })
        .then(function () {
            knex.select().from('team').then(function (team) {
                res.send(team)
            })
        })

});


module.exports = router;