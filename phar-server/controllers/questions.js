const Question = require('../models/question')
const mongoose = require('mongoose')

module.exports = {
    view: function (req, res) {
        Question.find((err, questions) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(people);
        })
    },
    edit: function (req, res) {
        Todo.findByIdAndUpdate(
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
        Todo.findByIdAndRemove(req.params.todoId, (err, todo) => {
            if (err) return res.status(500).send(err);
            const response = {
                message: "Todo successfully deleted",
                id: todo._id
            };
            return res.status(200).send(response);
        })
    },
    create: function (req, res) {
        let newQuestion = req.body.question

        newQuestion.save(err => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(newQuestion)
        })
    }
};
