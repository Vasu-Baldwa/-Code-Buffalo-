const graphql = require('graphql');
//const finder = require('lodash');
const User = require("../user.js");

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
                userID: { type: GraphQLID },
                passwd: { type: GraphQLString },
                avgPrice: { type: GraphQLFloat },
                priceN: {type: GraphQLInt}
            },
            resolve(parent, args) {
                let tempUser = new User({
                    userID:{type: new GraphQLNonNull(GraphQLID)},
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