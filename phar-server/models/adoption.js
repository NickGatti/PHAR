const mongoose = require('mongoose')

const adoptionSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, unique: true},
    password: String
})

module.exports = mongoose.model('Adoption', adoptionSchema)