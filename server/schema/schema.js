const graphql = require('graphql');
const finder = require('lodash');
const User = require("../user.js");

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLloat
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
                console.log(arguments);
                return finder.find(userArray, { userID: args.id });
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: {
            type: UserType,
            args: {
                userID: { type: GraphQLID },
                passwd: { type: GraphQLString },
                avgPrice: { type: GraphQLFloat },
                priceN: {type: GraphQLInt}
            },
            resolve(parent, args) {
                let tempUser = new User({
                    passwd: { type: new GraphQLNonNull(GraphQLString) },
                    avgPrice: { type: new GraphQLNonNull(GraphQLFloat) },
                    priceN: { type: new GraphQLNonNull(GraphQLInt) }
                });
                return tempUser.save();
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});