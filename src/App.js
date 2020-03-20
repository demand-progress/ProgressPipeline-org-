import React, { Component } from "react"
import { hot } from "react-hot-loader"
import './styles/global.scss'
import Content2 from "./Components/Content/Content2.js"

class App extends Component {
  render() {
    return (
      <div className="App">
          <Content2 />
      </div>
    );
  }
}

export default hot(module)(App);
