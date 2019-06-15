const graphql = require('graphql');
const _ = require('lodash');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLFloat
} = graphql;

const UserType = new GraphQLObjectType({
    name: "User",
    fields:() =>({
        userID:{type: GraphQLID},
        passwd:{type: GraphQLString},
        avgPrice:{type: GraphQLFloat},
        priceN: {type: GraphQLInt}
    })
});
