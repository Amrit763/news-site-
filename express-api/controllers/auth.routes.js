const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('./../config/index');

const userModel = require('./../models/user.model');
const userExtraModel = require('./../models/user.extra.model');

const userHelp = require('./../helper/user.help');

router.post('/register', (req, res, next) => {

    var user = new userModel;
    user = userHelp(req.body, user);
    user.save((err, user) => {
        if (err) {
            return next(err);
        }
        var userExtra = new userExtraModel;
        userExtra._id = user._id;
        userExtra.save((err, done) => {
            if (err) {
                console.log('error in register is >>>', err);
                return next(err);
            }
        })
        res.json(user);
    })
})


router.post('/login', (req, res, next) => {
    console.log('req.username', req.body.username);
    userModel.findOne({ username: req.body.username }).exec((err, user) => {
        if (user) {
            console.log('user>>', user);
            var isMatched = bcrypt.compareSync(req.body.password, user.password);
            if (isMatched) {
                var token = jwt.sign({ id: user._id }, config.jwtSecretKey);
                res.json({
                    token: token,
                    user: user
                });
            } else {
                return next({
                    message: 'Password did not match'
                })
            }
        } else {
            return next({
                message: 'Username did not matched'
            })
        }
    })
})

module.exports = router;