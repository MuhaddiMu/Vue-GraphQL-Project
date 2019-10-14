const Mongoose = require('mongoose')

const Schema = Mongoose.Schema;

const AuthorSchema = new Schema({
    Name: String,
    Age: Number,
    // Books: BookID
})

module.exports = Mongoose.Model('Author', AuthorSchema)