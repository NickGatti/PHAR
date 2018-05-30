const User = require('../models/user')
const mongoose = require('mongoose')

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
                res.session.name = ""
                req.session.save(() => {
                    res.redirect("http://localhost:3000/auth")
                })
            }
            if (!user) {
                console.log('Auth error 002', user)
                res.session.name = ""
                req.session.save(() => {
                    res.redirect("http://localhost:3000/auth")
                })
            }
            console.log('Auth success', user)
            req.session.user = {}
            req.session.user.name = name
            req.session.save(() => {
                res.redirect("http://localhost:3000/adoptions")
            })
        })
    }
};
