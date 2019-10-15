const GraphQL = require('graphql')
const _ = require('lodash')
const Book = require('../Models/Book')
const Author = require('../Models/Author')


const {GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull} = GraphQL

const TypeBook = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLID},
        Name: {type: GraphQLString},
        Genre: {type: GraphQLString},
        Author: {
            type: TypeAuthor, 
            resolve(parent, args){
                return Author.findById(parent.AuthorID)
            }
        },
    })
})

const TypeAuthor = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: {type: GraphQLID},
        Name: {type: GraphQLString},
        Age: {type: GraphQLInt},
        Books: {
            type: new GraphQLList(TypeBook),
            resolve(parent, args){
               return Book.find({AuthorID: parent.id})
            }
        }
    })
})

const QueryRoot = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        Book: {
            type: TypeBook,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
             return Book.findById(args.id)

            }
        },
        Author: {
            type: TypeAuthor,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                 return Author.findById(args.id)
            }
        },
        Authors: {
            type: new GraphQLList(TypeAuthor),
            resolve(parent, args){
                return Author.find({})
            }
        },
        Books: {
            type: new GraphQLList(TypeBook),
            resolve(parent, args){
                return Book.find({})
            }
        }
    }
})

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        CreateAuthor: {
            type: TypeAuthor,
            args: {
                Name: {type: new GraphQLNonNull(GraphQLString)},
                Age: {type: new GraphQLNonNull(GraphQLInt)}
            },
            resolve(parent, args){
                let author = new Author({
                    Name: args.Name,
                    Age: args.Age
                })
                return author.save()
            }
        },
        CreateBook: {
            type: TypeBook,
            args: {
                Name: {type: new GraphQLNonNull(GraphQLString)},
                Genre: {type: new GraphQLNonNull(GraphQLString)},
                AuthorID: {type: new GraphQLNonNull(GraphQLID)}
            },
            resolve(parent, args){
                let book = new Book({
                    Name: args.Name,
                    Genre: args.Genre,
                    AuthorID: args.AuthorID
                })
                return book.save()
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: QueryRoot,
    mutation: Mutation
})