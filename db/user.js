const knex = require('./knex.js');
const express = require('express');
let router = express.Router();
const bcrypt = require('bcrypt');

function validUser(user) {
    const validEmail = typeof user.email == "string" &&
        user.email.trim() != '';
    const validPassword = typeof user.password == "string" &&
        user.password.trim() != '' &&
        user.password.trim().length >= 6;

    return validEmail && validPassword;
}

router.get('/', function (req, res) {
    knex.select().from('user').then(function (user) {
        res.send(user)
    })
})


router.post('/add', function (req, res, next) {
    if(validUser(req.body)) {
        knex('user').insert({
            email: req.body.email,
            name: req.body.name,
            password: req.body.password

        })
    
            .then(function () {
                knex.select().from('user').then(function (user) {
                res.send(user)
        })
    
    }) 
} else {

    next(new Error('Invalid user'))
}
    
});

module.exports = router;