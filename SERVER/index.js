const Express = require('express')
const GraphqlHTTP = require('express-graphql')
const schema = require('./Schema/Schema')
const Mongoose = require('mongoose')

const App = Express();

Mongoose.connect('mongodb+srv://Muhaddis:Muhaddi@cluster0-dktnv.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true})


App.use('/graphiql', GraphqlHTTP({
    schema,
    graphiql: true
}))

App.listen('8000', () => {
    console.log("Listening Successfully");
})