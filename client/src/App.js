import React, { Component } from 'react';
import "./App.css";
import bk from "./img/bk.png";
import signupbtn from "./img/signupbtn.png";
import loginbtn from "./img/loginbtn.png";
import {createStackNavigator, createAppContainer} from 'react-navigation';

class App extends Component {
  render() {
    return (
      <div>
        <title>Welcome!</title>
        <link rel="stylesheet" type="text/css" href="css/index.css" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <section className="main">
          <div className="content-box">
            <div className="welcome">
              <h1>Welcome</h1>
              <p>This is the —app, a system that gives you something to do when you’re bored!</p>
            </div>
            <div className="action">
              <a href="#" />
              <a href="login.js" />
            </div>
          </div>
        </section>
      </div>
    );
  }
};

const MainNavigator = createStackNavigator({
  App: {screen: AppScreen},
  Login: {screen: LoginScreen},
});

App = createAppContainer(MainNavigator);

export default App;
