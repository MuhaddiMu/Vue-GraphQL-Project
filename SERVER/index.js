const Express = require('express')
const GraphqlHTTP = require('express-graphql')
const schema = require('./Schema/Schema')
const Mongoose = require('mongoose')

const App = Express();

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Muhaddis:Muhaddi@cluster0-dktnv.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    console.log('Successfully Connected to Database')
  //client.close();
});


App.use('/graphiql', GraphqlHTTP({
    schema,
    graphiql: true
}))

App.listen('8000', () => {
    console.log("Listening Successfully");
})