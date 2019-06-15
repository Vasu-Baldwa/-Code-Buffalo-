const graphql = require("graphql");
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull
} = graphql;


const User = new GraphQLObjectType({})


const RootQuery = new GraphQLObjectType({})


const Mutation = new GraphQLObjectType({})


module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});