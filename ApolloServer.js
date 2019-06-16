const { ApolloServer, gql } = require('apollo-server');
//const BoredAPI = require(".//datasource");

const typeDefs = gql`
  type Event {
    activity: String!
    accessibility: Float!
    type: String!
    participants: Int!
    price: Float!
    key: Int!
  }

  type Query {
    event(price: Float!): Event
    events: [Event]
  }
`;

const resolvers = {
    Query: {
        event: (root, { price }, { dataSources }) =>
            dataSources.BoredAPI.getEventP(price),
        events: (root, args, { dataSources }) => dataSources.BoredAPI.getRandomEvent(),
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        BoredAPI: new BoredAPI(),
    }),
});

server.listen().then(({ url }) => {
    console.log("Server ready at ${url}");
});

const {RESTDataSource} = require('apollo-datasource-rest');


class BoredAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://www.boredapi.com/api/';
    }

    async getEvent() {
        return this.get('activity');
    }

    async getEventP(price) {
        const result = await this.get('activity', {
            price
        });

        return result;
    }
};