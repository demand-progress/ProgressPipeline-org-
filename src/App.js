import React, { Component } from "react"
import { hot } from "react-hot-loader"
import Message from "./Components/Message/Message.js"
import "normalize.css"
import "./App.css"
import Content from "./Components/Content/Content.js"

class App extends Component {
  render() {
    return (
      <div className="App">
         
          <section className="container">
          <Content />
        </section>
      </div>
    );
  }
}

export default hot(module)(App);
