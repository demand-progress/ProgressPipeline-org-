import React, { Component } from "react";
import { hot } from "react-hot-loader";
import Message from "./Components/Message/Message.js";
import "normalize.css";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="main-header">
         <Navigation />
        </header>
        <section className="container">
          <Message message="Welcome to the react-starter. Start hacking away!" />
        </section>
      </div>
    );
  }
}

export default hot(module)(App);
