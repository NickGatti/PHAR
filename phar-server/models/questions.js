const mongoose = require('mongoose')

const questionsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    data: String,
    pet_id: Number,
    user_id: Number
})

module.exports = mongoose.model('Questions', questionsSchema)