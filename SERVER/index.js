const Express = require('express')
const GraphqlHTTP = require('express-graphql')
const schema = require('./Schema/Schema')

const App = Express();

App.use('/graphiql', GraphqlHTTP({
    schema,
    graphiql: true
}))

App.listen('8000', () => {
    console.log("Listening Successfully");
})