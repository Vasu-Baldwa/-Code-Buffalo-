const express = require("express");
const graphqlHTTP = require("express-graphql");
//const mongoose = require("mongoose");

const schema = require(".//schema//schema");
const app = express();

mongoose.connect("mongodb+srv://me1:<Password>@cluster0-qgqp7.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true });
mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB");
})

app.use("/graphql-books", graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log("Now listing on port 4000");
});
