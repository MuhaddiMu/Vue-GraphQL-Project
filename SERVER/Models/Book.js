const Mongoose = require('mongoose')

const Schema = Mongoose.Schema;

const BookSchema = new Schema({
    Name: String,
    Genre: String,
    AuthorID: String //Relation
})

module.exports = Mongoose.model('Book', BookSchema)