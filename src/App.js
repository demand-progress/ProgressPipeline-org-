import React, { Component } from "react"
import { hot } from "react-hot-loader"
import Content2 from "./Components/Content/Content2.js"

class App extends Component {
  render() {
    return (
      <div className="App">
          <section className="container">
          <Content2 />
        </section>
      </div>
    );
  }
}

export default hot(module)(App);
