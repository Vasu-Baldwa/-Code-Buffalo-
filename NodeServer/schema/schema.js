const graphql = require('graphql');
//const finder = require('lodash');
const User = require("../user.js");

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLInt,
    GraphQLFloat,
    GraphQLNonNull
} = graphql;

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        userID: { type: GraphQLString },
        passwd: { type: GraphQLString },
        avgPrice: { type: GraphQLFloat },
        priceN: { type: GraphQLInt },
        favorites: { type: GraphQLString },
    })
});


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        User: {
            type: UserType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args) {
                //console.log(arguments);
                return User.findById(args.id);
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
                userID: { type: new GraphQLNonNull(GraphQLString) },
                passwd: { type: new GraphQLNonNull(GraphQLString) },
                avgPrice: { type: new GraphQLNonNull(GraphQLFloat) },
                priceN: { type: new GraphQLNonNull(GraphQLInt) },
                favorites: { type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parent, args) {
                let tempUser = new User({
                    userID: args.userID,
                    passwd: args.passwd,
                    avgPrice: args.avgPrice,
                    priceN: args.priceN,
                    favorites: args.favorites
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
