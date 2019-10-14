const GraphQL = require('graphql')
const _ = require('lodash')

const Books = [
    {Name: 'Name of the Wind', Genre: 'Fantasy', ID: '1', AuthorID: '1'},
    {Name: 'The Final Empire', Genre: 'Fantasy', ID: '2', AuthorID: '2'},
    {Name: 'The Long Earth', Genre: 'Sci-Fi', ID: '3', AuthorID: '3'},
    {Name: 'The Hero of Ages', Genre: 'Fantasy', ID: '4', AuthorID: '2'},
    {Name: 'The Colour of Magic', Genre: 'Fantasy', ID: '5', AuthorID: '3'},
    {Name: 'The Light Fantastic', Genre: 'Fantasy', ID: '6', AuthorID: '3'}
  ]

const Authors =  [
    {Name: 'Patrick Rothfuss', Age: 44, ID:"1", BooksID: '1'},
    {Name: 'Brandon Sanderson', Age: 42, ID:"2", BooksID: '2'},
    {Name: 'Terry Pratchett', Age: 66, ID:"3", BooksID: ['1','2','3']},
    ]

const {GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList} = GraphQL

const TypeBook = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        ID: {type: GraphQLID},
        Name: {type: GraphQLString},
        Genre: {type: GraphQLString},
        Author: {
            type: TypeAuthor,
            resolve(parent, args){
                return _.find(Authors, {ID: parent.AuthorID})
            }
        },
    })
})

const TypeAuthor = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        ID: {type: GraphQLID},
        Name: {type: GraphQLString},
        Age: {type: GraphQLInt},
        Books: {
            type: GraphQLList(TypeBook),
            resolve(parent, args){
                return _.filter(Books, {AuthorID: parent.ID})
            }
        }
    })
})

const QueryRoot = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        Book: {
            type: TypeBook,
            args: {ID: {type: GraphQLID}},
            resolve(parent, args){
               return _.find(Books, {ID: args.ID})
            }
        },
        Author: {
            type: TypeAuthor,
            args: {ID: {type: GraphQLID}},
            resolve(parent, args){
                return _.find(Authors, {ID: args.ID})
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: QueryRoot
})