import React, { Component } from 'react';

var HomePart = React.createClass({
    render: function() {
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
                  <h1>New Activity Based On Your Interests 🎉</h1>
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
                    <a className="close" href="#" />
                  </div>
                </div>
              </div>
            </div>
            <div className="nav">
              <div className="nav-info">
                <p>Michael Koronas</p>
                <p>Level 3</p>
              </div>
              <div className="nav-img">
                <img src="img/profile.png" />
                <div className="dropdown-content">
                  <a href="index.html"><i className="fas fa-sign-out-alt" /></a>
                  <a href="interest.html"><i className="fas fa-heart" /></a>
                </div>
              </div>
            </div>
            <a className="main-button" id="openbtn" href="#" />
          </section>
        </div>
      );
    }
  });