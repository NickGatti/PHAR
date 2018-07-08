const Questions = require('../models/questions')
const mongoose = require('mongoose')

module.exports = {
    view: function (req, res) {
        if (!req.session.user) {
            console.log('No User In Session... so no session?')
        } else {
            console.log('Session and user found checking for error...')
            if (req.session.user.error === true) {
                console.log('Session error was true, false log-in')
            } else {
                console.log('Session error was false, good log-in')
                /*       
                Questions.find((err, question) => {
                    if (err) return res.status(500).send(err)
                    return res.status(200).send(question);
                })
                */
            }
        }
    },
    edit: function (req, res) {
        Questions.findByIdAndUpdate(
            req.params.question_ID,
            req.body,
            { new: true },
            (err, question) => {
                if (err) return res.status(500).send(err);
                return res.send(question);
            }
        )
    },
    delete: function (req, res) {
        Questions.findByIdAndRemove(req.params.todoId, (err, todo) => {
            if (err) return res.status(500).send(err);
            const response = {
                message: "Question successfully deleted",
                id: todo._id
            };
            return res.status(200).send(response);
        })
    },
    create: function (req, res) {
        let newQuestion = new Questions({ 
            _id: new mongoose.Types.ObjectId(),
            data: req.body.question,
            pet_id: req.body.petID,
            user_id: req.body.user._id
        })
        newQuestion.save(function (err) {
            if (err) {
                console.log(err)
                res.sendStatus(500)
            } else {
                res.redirect("http://localhost:3000/adoptions")
            }
        });
    }
};
