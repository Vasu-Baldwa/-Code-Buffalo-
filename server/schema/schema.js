const graphql = require('graphql');
const finder = require('lodash');

var users= [
    {userID: "1", passwd: "pass", avgPrice: 1.23, priceN: 3 },
    {userID: "2", passwd: "pass2", avgPrice: 1.5, priceN: 5 },
    {userID: "3", passwd: "pas", avgPrice: 6, priceN: 27 }
]

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
    fields: () => ({
        userID: { type: GraphQLID },
        passwd: { type: GraphQLString },
        avgPrice: { type: GraphQLFloat },
        priceN: { type: GraphQLInt }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        User: {
            type: UserType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return finder.find(users, { id: args.id });
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});