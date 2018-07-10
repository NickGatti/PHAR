const User = require('../models/user')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

module.exports = {
    register: function (req, res) {
        const user = new User  ({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            password: req.body.password
        })
        user.save().then( result => {
            console.log('MongoDB new user success', result)
        }).catch( error => {
            console.log('MongoDB new user failure', error)
        })
        res.status(201).json({
            newUser: user.name
        })
    },
    auth: function (req, res) {
        let name = req.body.name
        let password = req.body.password

        User.findOne({ name: name, password: password }, function (err, user) {
            if (err) {
                console.log('Auth error 001', err)
            }
            if (!user) {
                console.log('Auth error 002', user)
            }
            console.log('Auth success', user)

            jwt.sign({ user }, 'doobiedoo', { expiresIn: '2d' }, (err, token) => {
                // Remove password from user object
                let { password, ...newUser } = user
                console.log('user', newUser)
                res.json({ token, user: newUser, authed: true })
            })
            // WHAT NOW?
        })
    },
    verify: function (req, res) {
        jwt.verify(req.token, 'doobiedoo', (err, authData) => {
            if (err) {
                res.sendStatus(403)
            } else {
                res.json({
                    message: 'secret stuff',
                    authData
                })
            }
        })
    }
};
