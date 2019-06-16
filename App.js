import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import "./App.css";
import bk from "./img/bk.png";
import signupbtn from "./img/signupbtn.png";
import loginbtn from "./img/loginbtn.png";
import dropdown from "./img/dropdown.png";
import mainbutton from "./img/mainbutton.png";
import profile from "./img/profile.png";
import closebtn from "./img/closebtn.png";
import signout from "./img/signout.png";
import { Script } from 'vm';

class App extends Component {
  render() {
    return (
      <div>
        <title>Homepage</title>
        <link rel="stylesheet" type="text/css" href="css/home.css" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <section className="main">
          <div id="myModal" className="modal">
            <div className="modal-content">
              {/* <span class="close">&times;</span> */}
              <div className="title">
                <h1>New Activity Based On Your Interests</h1>
              </div>
              <div className="modal-data">
                <div className="inner-modal-data">
                  <h2>~ Go Hiking With Friends ~</h2>
                  <p>Recreational Activity</p>
                  <h3>Rate This Activity</h3>
                  <div className="slidecontainer">
                    <input min={1} max={5} defaultValue={5} className="slider" id="myRange" type="range" />
                  </div>
                  <a className="fav"><i className="far fa-heart" /></a>
                  <a className="main-button" href="App" />
                </div>
              </div>
            </div>
          </div>
          <div className="nav">
            <div className="nav-info">
              <p>Danny V</p>
            </div>
            <div className="nav-img">
              <img src={profile} />
            </div>
          </div>
        </section>
      </div>
    );
  }
};


export default App;
