const GraphQL = require('graphql')
const _ = require('lodash')
const Book = require('../Models/Book')
const Author = require('../Models/Author')


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
                // return _.find(Authors, {ID: parent.AuthorID})
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
                // return _.filter(Books, {AuthorID: parent.ID })
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
            //    return _.find(Books, {ID: args.ID})
            }
        },
        Author: {
            type: TypeAuthor,
            args: {ID: {type: GraphQLID}},
            resolve(parent, args){
                // return _.find(Authors, {ID: args.ID})
            }
        },
        Authors: {
            type: GraphQLList(TypeAuthor),
            resolve(parent, args){
                // return Authors
            }
        },
        Books: {
            type: GraphQLList(TypeBook),
            resolve(parent, args){
                // return Books
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: QueryRoot
})