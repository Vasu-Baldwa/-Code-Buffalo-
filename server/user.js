const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const User = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        userID:{type: GraphQLID},
        psswd:{type: GraphQLString},
        avgPrice:{type: GraphQLFloat},
        priceN:{type: GraphQLFloat}
        //typesN
    })

})

module.exports = mongoose.model('Author', authorSchema);