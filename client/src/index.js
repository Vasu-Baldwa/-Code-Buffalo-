import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker'; //Not sure what this does, you can probably delete it

import { gql } from "apollo-boost"

import ApolloClient from "apollo-boost";
const UserClient = new ApolloClient({
    uri: "localhost:4001/graphql"
  });
  const BoredClient = new ApolloClient({
    uri: "localhost:4000/graphql"
  });



BoredClient
.query({
  query: gql`
    {
      events(prices: "0.25") {
        activity
      }
    }
  `
})
.then(result => console.log(result));

ReactDOM.render(<App />, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();//see comment on line 5
